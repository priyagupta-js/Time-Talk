
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
