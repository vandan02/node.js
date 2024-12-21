
const User = require("../Models/user.schema");

const signup = async(req, res)=>{
  let {email, password} = req.body;
  let isExist = await User.find({email: email});

  if(!isExist){
      let user = await user.create(req.body);
      res.status(201).json(user)
  }else{
      res.status(400).send("Email already exists")
  }

  res.cookie("email", isExist.email)
  return res.send("signup successful");
}
const getUser = async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getUserById = async (req, res) => {
  try {
    let { userId } = req.params;
    let user = await User.findById(userId);
    res.status(202).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updateUser = async (req, res) => {
  try {
    let { userId } = req.params;
    let user = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    let { userId } = req.params;
    let user = await User.findByIdAndDelete(userId);
    res.status(200).json("message", "User deleted successfully", user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let isExists = await User.findOne({ email: email });
  if (!isExists) {
    return res.status(401).json({ error: "Invalid username or password" });
  }
  if (isExists.password != password) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  return res.status(200).json({ message: "Logged in successfully" });
};

module.exports = {
  signup,
  getUser,
  updateUser,
  deleteUser,
  getUserById,
  login,
};
