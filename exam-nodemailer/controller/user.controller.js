const User = require("../model/usermodel");

const bcrypt = require("bcrypt");
const sendmails = require("../service/malesend");
const signup = async (req, res) => {
  const { email, password } = await req.body;

 
  const isexsist = await User.findOne({ email: email });
  if (isexsist) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const hash = await bcrypt.hash(password, 10);
 

  const user= new User({
    email,
    password: hash,
  });
 
  await user.save();
  
  res.send("signup successfull");
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }
  const isexsist = await User.findOne({ email: email });
  if (!isexsist) {
    return res.status(400).json({ error: "User not found" });
  }
  const match = bcrypt.compare(password, isexsist.password);
  if (!match) {
    return res.status(400).json({ error: "Invalid password" });
  }
  res.send("login successfull");
};
const otps = new Map();
const sendotp = async (req, res) => {
  const { email } = req.body;
  try {
    isExists = await User.findOne({ email: email });
    if (!isExists) {
      return res.status(400).json({ error: "User not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(`otp: ${otp}`);

    otps.set(Number(otp), email);
    console.log(otps.get(Number(otp)));

    await sendmails(email, "OTP", "Your OTP is: " + otp);
    return res.redirect("reset");
  } catch (error) {
    res.send(error.message);
  }
};

const resetpassword = async (req, res) => {
  const { otp, password } = req.body;

  let data = otps.get(Number(otp));

  if (!data) {
    return res.status(400).json({ error: "Invalid OTP" });
  }
  const hash = await bcrypt.hash(password, 10);
  let user = await User.findOne({ email: data });
  user.password = await bcrypt.hash(password, 10);

  user.save();

  res.send("Password reset successfully");
};

module.exports = { 
  signup,
  login,
  sendotp,
  resetpassword,
 };
