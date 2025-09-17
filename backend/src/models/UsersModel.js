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

UserSchema.methods.toJSON = function(){
  const obj = this.toObject();
  delete obj.passwordHash;
  return obj;
};


module.exports = model("user", UserSchema);
// export default mongoose.model("User",userSchema);