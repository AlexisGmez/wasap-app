const { UUID } = require('sequelize');
const Users = require('../models/users.models');
const { hashPassword } = require('../utils/crypto');
const uuid = require('uuid');
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
    return data;
}


const findUserByEmail =async(email)=>{
    const data = await Users.findOne({
        where:{
            email
        }
    })
    return data;
}

const updateUser =async(id,userObj)=>{

    const updatedUser = {
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: hashPassword(userObj.password)
    }

    const data = await Users.update(updatedUser,{
        where:{
            id
        }
    })

    return data;
}

const createNewUser =async(user)=>{
    
    const newUser ={

        id:uuid.v4(),
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
    destroyUser,
    findUserByEmail
}
