const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
port = 3000;



dotenv.config({path:'./config.env'}); //database link path
require('./db/conn');

app.use(express.json()); //for json


// const User = require('./model/userSchema');

app.use(require('./router/auth'));

const middleware = (req, res, next)=>{
    console.log(`hello middleware`);
    next();
}

// app.get('/', (req, res)=>{
//     res.send(`Hello World!`)
// })
app.get('/about', middleware,(req, res)=>{
    console.log(`hello about`);
    res.send(`Hello About`)
})

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})