const mongoose = require('mongoose');


const MessageModel = mongoose.Schema({
sender:
{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
},
Content : {
    type:String,
    trim:true,
},

chat:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"chat"
},
},
{
    timestamps:true,
});

exports.module = mongoose.model("message",MessageModel);

// sender
// content 
// chat
