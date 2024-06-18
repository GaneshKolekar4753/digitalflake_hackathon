const express = require("express");
const { default: mongoose } = require("mongoose");

const mongoURI ="mongodb://localhost:27017/digitalflake" ;
console.log("uri",mongoURI)


const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("mongoDb is connected to the server successfully");
  } catch (error) {
    console.log("issue in connecting db",error)
  }
};

module.exports = connectDB;
