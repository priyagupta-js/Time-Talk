const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser'); 
const authRoutes = require('./src/routes/authRoutes.js');
const connectDB = require('./src/config/db.js');
const {Server} = require("socket.io");
const jwt = require("jsonwebtoken");
const User = require("./src/models/UsersModel.js");
const http = require("http");

dotenv.config();
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

// accept JSON bodies from React
app.use(express.json());
app.use(cookieParser());

// allow your react dev server to call this API
app.use(
  cors({
    origin:process.env.CLIENT_ORIGIN,
    credentials:true
  })
);

app.use("/api/auth", authRoutes);

io.use((socket, next) => {
  try {
    const cookie = socket.handshake.headers.cookie;
    if (!cookie) return next(new Error("No cookie"));

    const token = cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (!token) return next(new Error("No token"));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = decoded.userId;

    next();
  } catch (err) {
    next(new Error("Authentication error"));
  }
});


// SOCKET LOGIC
io.on("connection", async(socket) => {
  console.log("Socket connected:", socket.id);

   // mark user online
  await User.findByIdAndUpdate(socket.userId, {
    lastSeen: null,
  });


  socket.on("disconnect", async() => {
    console.log("Socket disconnected:", socket.id);
    await User.findByIdAndUpdate(socket.userId, {
      lastSeen: new Date(),
    });
  });
});


// health check
app.get("/",(req,res) =>
  res.send("Auth API is running"));

const PORT = process.env.PORT || 5000;

// start server only after DB connects

(async () =>{

  await connectDB();
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});
})();
