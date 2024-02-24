const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Provide Your Email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please Provide a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Provide Your Password"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatepassword,
  userpassword
) {
  return await bcrypt.compare(candidatepassword, userpassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
