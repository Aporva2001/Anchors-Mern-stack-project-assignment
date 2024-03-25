
const express= require('express');
const dotenv=require('dotenv');
// const connectDB = require('./config/db');
// const { default: connectDB } = require('./config/db');

const PORT=process.env.PORT || 5000;
dotenv.config();

const app= express();
const router= require("./auth-router");

app.use(express.json())

app.use("/api/auth",router);

app.listen(PORT, console.log(`Server started at port ${PORT}` ));


