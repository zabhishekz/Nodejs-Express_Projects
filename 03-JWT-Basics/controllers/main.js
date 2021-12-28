//check username, password in post(login) request
//if exist, create new JWT
//send back tof front-end

//set up authentication so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req,res) => {
    const {username, password} = req.body
    //mongoose validations
    //Joi
    //check in the controller
    if(!username || !password){
        throw new CustomAPIError('please provide email and password',400)
    }

    //just for demo, generally provided by DB
    const id = new Date().getDate()

    //try to keep payload small
    //just for demo, in production use long, complex, and unguessable string value !!!
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn: '30d'})
    res.status(200).json({msg: 'user created', token})

    console.log(username, password);
    res.send('Fake login/Register/Signup Route')
}

const dashboard = async (req,res) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('No token provided',401)
    }
    const token = authHeader.split(' ')[1]
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const luckyNumber = Math.floor(Math.random()*100)
        res.status(200).json({msg : `Hello, ${decoded.username}`, 
            secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
        console.log(decoded);
    }
    catch(error){
        throw new CustomAPIError('Not authorized to access this route',401)
        
    }
    // console.log(req.headers)
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg : `Hello, John Doe`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login, dashboard
}