const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/UsersModel')
const router = express.Router();
const jwt = require('jsonwebtoken');

// POST /api/auth/signup
router.post('/signup', async(req,res) =>
{
    console.log("Received request for POST method");
try{
    const {name,username,email,password} = req.body;
    // basic validation
    if (!name || !username || !password)
    {
        return res.status(400).json({message:"Fields are required"});
    }
    // duplicate username
    const existing = await User.findOne({username:username.toLowerCase()});
    if(existing)
    {
        return res.status(409).json({message:"Uername already exists"});
    }

    const passwordHash = await bcrypt.hash(password,10);

    // save user 
    await User.create({
        name, username:username.toLowerCase(),
        email,
        passwordHash
    });

    return res.status(201).json({message: "Account created. Please log in."});
}catch(err){
    console.error("Signup error:",err);
    res.status(500).json
    ({
    message:"Server error"
    });
}
});


// POST /api/auth/login
router.post("/login",async(req,res) =>{
    try{
        const { username,password} = req.body;

        if(!username || !password)
        {
            return res.status(400).json({message:"Username and password are required"});
        }

        const user = await User.findOne({username:username.toLowerCase()});
        if(!user)
        {
            return res.status(400).json({message:"Invalid username or password."});
        }    

        const ok = await bcrypt.compare(password, user.passwordHash);
        if(!ok)
        {
            return res.status(400).json({message:"Invalid username or password"});
        }
        
    // for now, keep it simple — return success + user summary
    // later you can issue a JWT and set a cookie
        return res.status(200).json({
            message:"Login successful",
            user:{id:user._id, username: user.username, name:user.name}
        });
    }
    catch(err)
    {
        console.error("Login error:",err);
        return res.status(500).json({message:"Server error"});
    }
});

module.exports = router;