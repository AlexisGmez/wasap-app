const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const Participants = db.define({

    id:{
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId:{
        type:DataTypes.UUID,
        allowNull:false
    },
    conversationId:{
        type:DataTypes.UUID,
        allowNull:false
    },
    isAdmin:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }


})

module.exports = Participants;