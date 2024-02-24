const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

exports.connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("DataBase Connected");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1); // Exit the process if unable to connect
  }
};
