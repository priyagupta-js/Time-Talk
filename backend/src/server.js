const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const PORT = 3000;


// const item = require("./routes/authRoutes");
// item.use('/api',item);

// // MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/userDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log("DB Connection Error:", err));

// Start Server
// app.listen(PORT, () => {
//     console.log("Server running on port 3000");
// });










// // dummy request
// app.get('/', (req,res) =>{
//     res.send("Hello World!");
//     console.log("Received GET request");
// ----------- to send the file----------------
// res.sendFile('./filename',{root: __dirname});
// })

// app.post('/items' , (req,res) =>{
//     res.send("Get a post request");
// })

// app.put('/items/:id',(req,res)=>{
//     res.send("Get a put request");
// })
// app.delete('/items/:id',(req,res) =>{
//     res.send("Get a delete request");
// })
// // app or server
// app.listen(PORT, () =>{
//     console.log("Server has started");
// });

// -------------chaining of request---------
// app.put('/items/:id',(req,res)=>{
//     res.send("Get a put request");
// }).delete('/items/:id',(req,res) =>{
//     res.send("Get a delete request");
// })