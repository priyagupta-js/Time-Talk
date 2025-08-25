const express = require('express');
const router = express.Router();
const User = require('../models/UsersModel');


// routes 

// middleware

// CRUD operations

router.get('/users', async(req,res) =>
{
try{
    const users = await User.find();
    res.status(200).json(users);
}catch(err){
    res.status(500).json({success:false,message:err.message})

}
})


router.post('/users', async(req,res) =>
{
    console.log("Received request for POST method");
    console.log(req.body);
try{
    const {name,age,weight} = req.body;
    const newuser = new User({name,age,weight});
    await newuser.save();
    res.status(200).json({
        success:true,
        user:newuser,
    });
}catch(err){
    res.status(500).json
    ({
        success:false,
        message:err.message
    })
}

})

module.exports = router;
// request types -> get / put / post / delete
// path -> / , /about , /blog


// ----------------dummy request----------------------------
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

// -----------Using express.Router()------------------
// const express = require('express');
// const router = express.Router();

// // app.use(express.json());

// router.get('/',(req,res) =>{
//     res.send("Got a GET Request");
// })
// router.post('/items',(req,res)=>{
//     res.send("Got a POST request");
// })
// router.put('/items/:id',(req,res) =>{
//     res.send("Got a PUT request")
// })
// router.delete('/items/:id',(req,res) =>{
//     res.send("Got a Delete request")
// })
// module.exports = router;


// const express = require('express');
// const router = express.Router();

// // auth middleware

// const auth = function(req,res,next)
// {
// console.log("I am inside auth wala middleware");

// req.user = {userId: 1, role:"admin"};

// if(req.user)
// {
//     next();
// }
// else{
//     res.json({
//         success:false,
//         message:"Not a Valid User",
//     })
// }
// }

// const isStudent = function (req,res,next)
// {
//     console.log("I am inside student wala middleware");

//     if(req.user.role === "student")
//     {
//         next();
//     }
//     else
//     {
//         res.json({
//             success:false,
//             message:"Access Denied, this route is only for students"
//         })
//     }
// }

// const isAdmin = function(req,res,next) {
//     console.log("I am inside isAdmin wala middleware");

//     if (req.user.role === "admin")
//     {
//         next();
//     }
//     else
//     {
//         res.json({
//             success:false,
//             message:"Access Denied, this route is only for Admins"
//         })
//     }
// }

// router.get('/students' , auth , isStudent, (req,res) =>{
// console.log("I am inside student route");
// res.send("Students specific page");
// })

// router.get("/admin" , auth , isAdmin , (req,res)=>{
// console.log("I am inside Admin route");
// res.send("Admin specific page");
// })
// module.exports = router
