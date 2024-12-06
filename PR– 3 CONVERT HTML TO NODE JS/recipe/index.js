const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

const db = require("./db");
const { rmSync } = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const recipeschema = new mongoose.Schema({
  name: String,
  description: String,
  preparationTime: String,      
  cookingTime: String,
  imageUrl: String,
  country: String,
  veg: Boolean,
  id: Number,
});
let recipe = mongoose.model("recipe", recipeschema);

let initialRecipe = [
  {
    name: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish.",
    preparationTime: "15 minutes",
    cookingTime: "15",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    country: "India",
    veg: true,
    id: 1,
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to the Recipe API.");
});
app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "recipe.html"));
});
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/recipe/all", async (req, res) => {

    let recipes = await recipe.find(); 
    res.send(recipes); 
  
});

const validate = (req, res, next) => {
  const { name, description, preparationTime, cookingTime, imageUrl, country, veg } = req.body;

  if (!name || !description || !preparationTime || !cookingTime || !imageUrl || !country || veg === undefined) {
    return res.status(400).json({ message: "All fields are required" });
  }

  next();
};
app.post("/recipe/add",validate,async(req, res) => {
  try {
    let newRecipe = await recipe.create(req.body)
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).send({ error:error.message });
  }
})

app.patch('/recipe/update/:id',async(req, res) => {
  try {
    let updatedRecipe = await recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
})

app.delete('/recipe/delete/:id',async(req, res) => {
  try {
    await recipe.findByIdAndDelete(req.params.id)
    res.status(204).send();
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
})

app.get("/recipe/filter",async(req,res)=>{
  let {veg}=req.query
  if(veg==true) {
  const vegrecipes = await recipe.find({ veg: veg === "true" });
  res.send(vegrecipes);
  }else{
    const nonvegrecipes = await recipe.find({ veg: veg === "false" });
    res.send(nonvegrecipes);
  }



})
app.listen(8090, () => {
  console.log("localhost listening on 8090");

  db();
});


