const Conversations = require("./conversations.models")
const Messages = require("./messages.models")
const Participants = require("./participants.models")
const Users = require("./users.models")


const initModels =()=>{

   Users.belongsTo(Participants)
   Participants.hasMany(Users)

   Participants.hasMany(Messages)
   Messages.belongsTo(Participants)

   Participants.hasMany(Conversations)
   Conversations.belongsTo(Participants)
   
}


module.exports = initModels;