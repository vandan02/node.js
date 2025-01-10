const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.alluser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.send(error);
  }
};
exports.creat_user = async (req, res) => {
  try {
    let { email, password } = req.body;
    const isexsist = await User.findOne({ email: email });
    if (isexsist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hash = await bcrypt.hash(password, 10);

    req.body.password = hash;
    const user = await User.create(req.body);
    try {
        let token = await jwt.sign(
          {
            
            username: user.username,
            email: user.email,
            userid: user.id,
          },
          process.env.secret_key
        );
        res.json({ message: "user creat", user, token });
      } catch (error) {
        res.send(error.message);
      }
  } catch (error) {
    res.send(error);
  }


};

exports.login = async (req, res) => {
  let { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const ismatch = await bcrypt.compare(password, user.password);
  if (!ismatch) {
    return res.status(401).json({ message: "Invalid Password" });
  }
  try {
    let token = await jwt.sign(
      {
   
        username: user.username,
        email: user.email,
        userid: user.id,
      },
      process.env.secret_key
    );
    res.json({ message: "Logged In", user, token });
  } catch (error) {
    res.send(error.message);
  }
};
