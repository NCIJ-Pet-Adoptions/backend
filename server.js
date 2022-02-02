//Express
const express = require("express");
const app = express()
const port = 3000

// app.listen(port, () => {console.log(`Server listening at http://localhost:${port}`)})

//Allow express to read json request bodies
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Imports
const {sequelize} = require('./db');
const { Dog } = require('./models/dog.js')
const seed = require('./seed.js');

//Path
const path = require('path');
const { json } = require("body-parser");

//Static assets from public folder
app.use(express.static('public')) 

//seed our database
// seed();