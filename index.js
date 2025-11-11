require('dotenv').config();
const express = require('express');
//  import express from 'express'

const app = express();

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Welcome Back, Champ");
})

app.get("/twitter", (req, res)=>{
    res.send('<a href="https://github.com/aslam8801">GitHub</a>')
})

app.listen(PORT, ()=>{
    console.log(`App listening at port${PORT}`);
});

console.log(process.env.PORT);