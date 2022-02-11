const {Sequelize, DataTypes, Model, INTEGER} = require('sequelize');
const {sequelize} = require('../db');
class Dogs extends Model {}

Dogs.init({
    name:DataTypes.STRING,
    image:DataTypes.STRING,
    purpose:DataTypes.STRING,
    breed:DataTypes.STRING, 
    color: DataTypes.STRING,
    size:DataTypes.INTEGER, 
    gender:DataTypes.STRING,
    tidbit:DataTypes.STRING

}, {
    sequelize,
    timestamps: false,
});

module.exports = {Dogs};