
const { Schema,model} = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
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
},
{
timestamps:true
});

const userModel = model("user", UserSchema);
module.exports = userModel;