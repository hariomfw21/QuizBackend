const express = require('express');
const { connection } = require('./connection/connection');
const { userRouter } = require('./routes/userroute');
const cors = require('cors');
const { quizRouter } = require('./routes/quizroute');
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req,res)=>{
    res.send('Welcome to the world');
})

app.use('/',userRouter);
app.use('/',quizRouter);

app.listen(3000,async()=>{
    try {
        await connection
        console.log('app is listening on port 3000');
        console.log('app is connected to database');
    } catch (error) {
        console.error(error.message);
    }
})