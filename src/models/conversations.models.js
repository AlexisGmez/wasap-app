const db = require("../utils/database");
const {DataTypes} = require('sequelize');

const Conversations  = db.define('conversations',{

    id:{
        type: DataTypes.UUID,
        primaryKey:true
    },
    profileImage:{
        type:DataTypes.STRING,
        

    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdBy:{
        type: DataTypes.UUID,
        allowNull: false,
    },
    isGroup:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
});


module.exports =Conversations;
