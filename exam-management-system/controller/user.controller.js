
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

exports.create = async (req, res) => {
  console.log(req.body);

  try {
        const user = await User.findOne({email: req.body.email});
        if(user) throw new Error("Email already exists");

       const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword
       const users= await User.create(req.body);
        res.status(201).json({message: "User created successfully", user});
    // const user = await User.create(req.body);
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
};
