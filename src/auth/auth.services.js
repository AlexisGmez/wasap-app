const { success, error } = require("../utils/handleResponses");
const checkUserCredentials = require("./auth.controllers");
const jwt =  require('jsonwebtoken');

const postLogin =(req,res)=>{

    const { email, password } = req.body;

    checkUserCredentials(email,password)
        .then(data=>{
            
            if (data) {
                const token = jwt.sign({
                    id:data.id,
                    email: data.email,
                    firstName: data.firstName
                    
                },'academlo',{
                    expiresIn:60
                })
                success({
                    res,
                    status:200,
                    message:'Correct credentials',
                    data: token
                })
            }else{
                error({
                    res,
                    status:401,
                    message:'Invalid credentials'
                })
            }
        })
        .catch(err=>{
            error({
                res,
                status:400,
                data:err,
                message:'Something bad'
            })
        })
}

module.exports =postLogin;