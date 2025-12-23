// mongoDB connection

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {

  try {
    console.log("Mongo URI:", process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");  
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = connectDB;