const success =({status, data, message, res})=>{

    res.status(status).json({
        error:false,
        status:status,
        message: message,
        data:data
    })
}

const error = ({error,status,message,res})=>{
    res.status(status).json({
        error:true,
        status:status,
        message: message,
       
    })
}

module.exports = {
    success,
    error
}