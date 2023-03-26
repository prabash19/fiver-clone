const bcrypt = require("bcryptjs");
const createToken = require("../utils/createToken");
const catchAsyncError = require("../middlewares/catchAsyncError");
const User = require("../models/user");
const passwordCompare = require("../utils/passwordCompare");
const ErrorHandler = require("../utils/errorHandler");
exports.getAuth = (req, res) => {
  res.send("get auth");
};

exports.register = catchAsyncError(async (req, res) => {
  const { username, email, image } = req.body;
  const password = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({
    username,
    email,
    image,
    password,
  });
  const { token, options } = createToken(user._id);
  res.status(201).cookie("token", token, options).json({
    success: true,
    message: "Successfully Registered",
    user,
  });
});
exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invaid email or password", 400));
  }
  const isCorrectPassword = await passwordCompare(password, user.password);
  if (!isCorrectPassword) {
    return next(new ErrorHandler("Incorrect Email or Password", 400));
  } else {
    const { token, options } = createToken(user._id);
    res.status(201).cookie("token", token, options).json({
      message: "logged in Successfully",
    });
  }
});
exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(201).json({
    success: "true",
    message: "logged out",
  });
});
exports.deleteUser = catchAsyncError(async (req, res, next) => {
  console.log("id is", req.body.id);
  const user = await User.findByIdAndDelete(req.body.id);
  res.status(201).json({
    success: "true",
    message: "successfully deleted",
    user,
  });
});
