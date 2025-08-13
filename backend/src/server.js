const express = require('express');
const app = express();
const PORT = 3000;

// dummy request
app.get('/', (req,res) =>{
    res.send("Hello World!");
    console.log("Received GET request");
})
// app or server
app.listen(PORT, () =>{
    console.log("Server has started");
});
