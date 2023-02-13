const express = require('express');
const initModels = require('./models/init.models');
const db = require('./utils/database');
const { success, error } = require('./utils/handleResponses');
const userRouter = require('./users/users.router');


require('dotenv').config();
const app = express();

app.use(express.json());

db.authenticate()
    .then(()=>console.log('db authenticated'))
    .catch((err)=>console.log(err))


db.sync()
    .then(()=>{
        console.log('the db sincronized correctly')
    })
    .catch(err=> console.log(err))

initModels();

app.get('/',(req,res)=>{
    success({
        res,
        status:200,
        message: 'Servidor inicializado correctamente',
        data:{
            "users": "https://localhost:9000/api/v1/users",
            "conversations": "https://localhost:9000/api/v1/conversations",

        }
    })
})


app.use('/api/v1',userRouter);

app.use('*',(req,res)=>{
    error({
        res,
        status:404,
        message:'URL not found please try with http://localhost:9000'
    })
})

app.listen(9000,()=>{
    console.log('Server Started at port 9000')
})