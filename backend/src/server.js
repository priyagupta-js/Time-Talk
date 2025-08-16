const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const db = mongoose();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/userDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB Connection Error:", err));

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 5000");
});

// // dummy request
// app.get('/', (req,res) =>{
//     res.send("Hello World!");
//     console.log("Received GET request");
// })

// app.post('/items' , (req,res) =>{
//     res.send("Get a post request");
// })

// app.put('/items/:id',(req,res)=>{
//     res.send("Get a put request");
// })
// app.delete('/delete/:id',(req,res) =>{
//     res.send("Get a delete request");
// })
// app or server
// app.listen(PORT, () =>{
//     console.log("Server has started");
// });









