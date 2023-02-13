const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Users = db.define('users',{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    }    
    


})

module.exports = Users