const { DataTypes } = require("sequelize");
const db = require("../utils/database");




const Messages = db.define({

    id:{
        type:DataTypes.UUID,
        primaryKey:true
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },
    participantId:{
        type:DataTypes.UUID,
        allowNull:false
    },
    status: {
       type: DataTypes.STRING,
       defaultValue: 'send'
    }

})

module.exports = Messages;