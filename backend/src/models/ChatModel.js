const mongoose = require('mongoose');

const ChatModel = mongoose.Schema
({
chatName:
{
    type:String,
    required:true,
    trim:true
},
isGroupChat:{
    type:Boolean,
    default:false
},

// refer the user document
users:[{
type:mongoose.Schema.Types.ObjectId,
ref:"user",
}],
latestMessage :{
    type:mongoose.Schema.Types.ObjectId,
    ref:"messages",
},
groudAdmin:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
},
},
{
timestamps:true
}
);

module.exports = mongoose.model ("chat",ChatModel);


// chatName
// isGroupChat
// users
// latestMessages
// groudAdmin