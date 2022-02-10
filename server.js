//Express
const express = require("express");
const app = express();
const port = 3000;

//Allow express to read json request bodies
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//cors
const cors = require('cors');
app.use(cors());

//Imports
const {sequelize} = require('./db');
const  {Dogs} = require('./models/dogs')

//index redirects to dog
app.get('/', (req,res)=>{
    res.redirect('/dogs')
})

app.get('/dogs', async (req, res) => { 
    const allDogs = await Dogs.findAll();
    res.json(allDogs) 
});


app.get('/dogs/:id', async (req, res) => {
    const singleDog = await Dogs.findByPk(req.params.id);
    res.json({singleDog}); 
})

app.get('/breed/:breed', async (req, res) => {
    const dogByBreed = await Dogs.findAll({where:{breed:req.params.breed}});
    console.log(dogByBreed);
    res.json({dogByBreed}); 
});
app.get('/color/:color', async (req, res) => {
    const dogByColor = await Dogs.findAll({where:{color:req.params.color}});
    res.json({dogByColor}); 
});
app.get('/size/:size', async (req, res) => {
    const dogBySize = await Dogs.findAll({where:{size:req.params.size}});
    res.json({dogBySize}); 
})

app.get('/gender/:gender', async (req, res) => {
    const dogByGender = await Dogs.findAll({where:{gender:req.params.gender}});
    res.json({dogByGender}); 
})
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})