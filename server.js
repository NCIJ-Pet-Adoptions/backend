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

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})