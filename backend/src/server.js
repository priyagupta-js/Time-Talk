const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose();
const PORT = 3000;

// dummy request
app.get('/', (req,res) =>{
    res.send("Hello World!");
    console.log("Received GET request");
})

app.post('/items' , (req,res) =>{
    res.send("Get a post request");
})

app.put('/items/:id',(req,res)=>{
    res.send("Get a put request");
})
app.delete('/delete/:id',(req,res) =>{
    res.send("Get a delete request");
})
// app or server
app.listen(PORT, () =>{
    console.log("Server has started");
});
