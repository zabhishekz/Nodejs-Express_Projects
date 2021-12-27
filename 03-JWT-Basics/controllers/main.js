//check username, password in post(login) request
//if exist, create new JWT
//send back tof front-end

//set up authentication so only the request with JWT can access the dashboard

const CustomAPIError = require('../errors/custom-error')

const login = async (req,res) => {
    const {username, password} = req.body
    //mongoose validations
    //Joi
    //check in the controller
    if(!username || !password){
        throw new CustomAPIError('please provide email and password',400)
    }

    console.log(username, password);
    res.send('Fake login/Register/Signup Route')
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg : `Hello, John Doe`, secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login, dashboard
}