
const express = require('express');
const router = express.Router();

// app.use(express.json());

router.get('/',(req,res) =>{
    res.send("Got a GET Request");
})
router.post('/items',(req,res)=>{
    res.send("Got a POST request");
})
router.put('/items/:id',(req,res) =>{
    res.send("Got a PUT request")
})
router.delete('/items/:id',(req,res) =>{
    res.send("Got a Delete request")
})


module.exports = router;

// request types -> get / put / post / delete
// path -> / , /about , /blog


 // dummy request
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