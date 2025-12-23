// Users, profile, lastSeen

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
    trim:true
  },
  username :{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true
  },
email:{
     type: String,
    required: true,
    lowercase:true,
    trim:true
  },
  passwordHash:{
    type:String,
    required:true,
  },
  picture:{
    type:String,
    required:false,
    default:
       "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
},
{
timestamps:true
});


module.exports = mongoose.model("user", UserSchema);
