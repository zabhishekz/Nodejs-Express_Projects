const express = require ('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found')

require('dotenv').config();

//middleware
app.use(express.json());
app.use(express.static('./public'));

//routes
app.use('/api/v1/tasks',tasks)
app.use(notFound);

const port = 3000;

const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URI);
        //here we only want the server to start if connect to DB is establihed , thus awe use async and await
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    }
    catch(error){
        console.log(error);
    }
}

start();