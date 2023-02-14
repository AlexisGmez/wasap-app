const { UUID } = require('sequelize');
const Users = require('../models/users.models');
const { hashPassword } = require('../utils/crypto');

const findAllUsers =async()=>{
    

    const data = await Users.findAll();
    return data;
}

const findUserById=async(id)=>{
    const data = await Users.findOne({
        where:{
            id
        }
    })
}

const updateUser =async(id,userObj)=>{

    const data = await Users.update(userObj,{
        where:{
            id
        }
    })

    return data;
}

const createNewUser =async(user)=>{
    
    const newUser ={

        id:UUID,
        firstName:user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: hashPassword(user.password)
    }

    const data = await Users.create(newUser);
    return data;
}

const destroyUser =async(id)=>{
    const data = await Users.destroy({
        where:{
            id
        }
    });
    return data;
}

module.exports = {
    findAllUsers,
    findUserById,
    updateUser,
    createNewUser,
    destroyUser
}
