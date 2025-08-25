const { Schema,model} = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  age :{
    type:Number,
    required:true,
    maxlength:4
  },
  weight:{
    type:Number,
    required:true,
    maxlength:4
  },
});

const userModel = model("user", UserSchema);
module.exports = userModel;