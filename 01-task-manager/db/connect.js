const mongoose = require('mongoose');

const connectionString = 
'mongodb+srv://abhishekV:Abhishek90@cluster0.tsxbz.mongodb.net/01-TASK_MANAGER?retryWrites=true&w=majority';

const connectDB = (url) =>{
    return mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectDB;