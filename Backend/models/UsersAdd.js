const mongoose = require("mongoose");
const schemaData = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    userType: { type: String,required: true },
    userRoll: { type: String,required: true },
    mobile: { type: Number,required: true },
  
  });
  
// const userModel = mongoose.model("Userdetails", schemaData);
module.exports = mongoose.model("Userdetails", schemaData);