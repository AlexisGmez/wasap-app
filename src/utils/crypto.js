const bcrypt = require('bcrypt');



const hashPassword =(plainPassword)=>{

    return bcrypt.hashSync(plainPassword,10)
}

const comparePassword =(plainPassword, hashedPassword )=>{
    return bcrypt.compareSync(plainPassword,hashPassword)
}

module.exports={
    hashPassword,
    comparePassword
}