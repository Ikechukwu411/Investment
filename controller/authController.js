const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
const dotenv = require("dotenv");

dotenv.config();

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.SECRET_KEY_BASE, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.createuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please Provide email and password" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = signToken(newUser._id);
    res.cookie("jwt", token);

    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
    res.cookie("jwt", token);
  } catch (error) {
    console.log(error);
  }
};

exports.loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please Provide email and password" });
    }
    const user = await User.findOne({ email }).select("+password");
    console.log(user);
    const correct = await user.correctPassword(password, user.password);

    if (!user || !correct) {
      return res.status(401).json({ message: "Incorrect Email or Password" });
    }

    const token = signToken(user._id);
    res.status(200).json({
      status: "success",
      token,
    });
  } catch (error) {
    console.log(error);
  }
};
