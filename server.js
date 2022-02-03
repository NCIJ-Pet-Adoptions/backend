//Express
const express = require("express");
const app = express();
const port = 3000;


//Allow express to read json request bodies
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Imports
const {sequelize} = require('./db');
const  Dog = require('./models/dog')
const seed = require('./seed');

//Path
const path = require('path');


//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))

//index redirects to sauces
app.get('/', (req,res)=>{
    res.redirect('/dog')
})

app.get('/dog', async (req, res) => { 
    const allDogs = await Dog.findAll();
    res.json(allDogs) 
});


app.get('/dog/:id', async (req, res) => {
    const singleDog = await Dog.findByPk(req.params.id);
    res.json(singleDog); 
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})