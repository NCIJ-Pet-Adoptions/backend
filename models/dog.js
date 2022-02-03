const {Sequelize, DataTypes, Model, INTEGER} = require('sequelize');
const {sequelize} = require('../db');
class Dog extends Model {}

Dog.init({
    name:DataTypes.STRING,
    image:DataTypes.STRING,
    purpose:DataTypes.STRING,
    breed:DataTypes.STRING, 
    color: DataTypes.STRING,
    size:DataTypes.INTEGER, 
    hypoallergenic:DataTypes.BOOLEAN

}, {
    sequelize,
    timestamps: false,
});

module.exports = {Dog};