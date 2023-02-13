const { success, error } = require("../utils/handleResponses")
const { findAllUsers, findUserById, createNewUser, destroyUser, updateUser } = require("./users.controllers")


const getAllUsers =(req,res)=>{
    findAllUsers()
        .then(data=>{
            success({
                status:200,
                data,
                message:'data obtained succesfully',
                res
            })
        })
        .catch(err=>{

            error({
                error:err,
                status:400,
                message:'error to obtain results',
                res
            })
        })
}

const getUserById =(req,res)=>{
    const id = Number(req.params.id);
    findUserById()
        .then(data=>{
            success({
                status:200,
                data,
                message:'user obtained succesfully',
                res
            })
        })
        .catch(err=>{
            error({
                error:err,
                status:404,
                message:'not found user',
                res
            })
        })
}

const postNewUser =(req,res)=>{

    const userObj = req.body;

    createNewUser(userObj)
        .then(data=>{
            success({
                status:201,
                data,
                message:'user created succesfully',
                res
            })
        })
        .catch(err=>{
            error({
                error:err,
                status:400,
                message:'error to create user',
                res
            })
        })
}

const deleteUser =(req,res)=>{


    const id = req.params.id;

    destroyUser(id)
        .then(data=>{
            success({
                status:200,
                data,
                message:'user deleted succesfully',
                res
            })
        })
        .catch(err=>{
            error({
                error:err,
                status:400,
                message:'error to delete user',
                res
            })
        })
}

const patchUser =(req,res)=>{
    const id = req.params.id;
    const userObj = req.body;

    updateUser(id,userObj)
        .then(data=>{
            if (data) {
                success({
                    status:200,
                    data,
                    message:`user with id:${id} updeted succesfully`,
                    res
                })
            }else{
                error({
                    error:err,
                    status:404,
                    message:'user not found',
                    res
                })
            }
        })
        .catch(err=>{
            error({
                error:err,
                status:400,
                message:'error to update user',
                res
            })
        })
}

const putUser = (req,res)=>{
    const id = req.params.id;
    const userObj = req.productObj;

    if(!productObj.firstName || !productObj.lastName || !productObj.email||!productObj.password){
        res.status(400).json({
            message:'missing data',
            fields:{
                firstName: 'String',
                lastName: 'String',
                email: 'example@example.com',
                password: '*******'
            }
        })

        updateUser(id,userObj)
            .then(data=>{
                if (data) {
                    success({
                        status:200,
                        data,
                        message:'user updated succesfully',
                        res
                    })
                }else{
                    error({
                        error:err,
                        status:400,
                        message:'error to update user',
                        res
                    })
                }
            })
            .catch(err=>{
                error({
                    error:err,
                    status:404,
                    message:'error to update user',
                    res
                })
            })
    }
}

module.exports={

    getAllUsers,
    getUserById,
    postNewUser,
    deleteUser,
    patchUser,
    putUser
}