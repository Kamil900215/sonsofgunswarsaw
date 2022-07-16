const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authRoute = require("./routes/auth.jsx");
const Category = require("../models/Category.jsx")

dotenv.config();
app.use(express.json());

console.log(Category);

mongoose.connect(process.env.MONGO_URL)
.then(console.log('connected to mongo'))
.catch((err) => console.log(err));

// app.use("/API/auth", authRoute);

app.listen('5000', () => {
    console.log('backend is runing');
})




// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/")


















