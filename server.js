//Express
const express = require("express");
const app = express();
const port = 3000;


//Allow express to read json request bodies
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Imports
const {sequelize} = require('./db');
const { Dog }= require('./models/dog')
const seed = require('./seed');

//Path
const path = require('path');
const { json } = require("body-parser");

// //Static assets from public folder
// app.use(express.static('public')) 

//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/dog', async (req, res) => { 
    const allDogs = await Dog.findAll();
    res.render('dog', {allDogs}) 
});


app.get('/dog/:id', async (req, res) => {
    const singleDog = await Dog.findByPk(req.params.id);
    res.render(dog, {singleDog}); 
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})