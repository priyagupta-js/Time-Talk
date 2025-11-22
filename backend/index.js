const express = require('express');
// const mongoose = require ('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/authRoutes.js');
const connectDB = require('./src/config/db.js');

dotenv.config();
const app = express();

// accept JSON bodies from React
app.use(express.json());

// allow your react dev server to call this API
app.use(
  cors({
    origin:process.env.CLIENT_ORIGIN,
    credentials:true
  })
);

// mongoose.connect(process.env.MONGODB_URI)

app.use("/api/auth", authRoutes);

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

