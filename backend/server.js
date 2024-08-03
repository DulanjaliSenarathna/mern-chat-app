const express = require('express');
const dotenv = require('dotenv')
const { chats } = require('./data/data');
const connectDB = require('./config/db');
const colors = require('colors')
const  userRoutes  = require('./routes/userRoutes');
const  chatRoutes  = require('./routes/chatRoutes');
const  messageRoutes  = require('./routes/messageRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
dotenv.config();
connectDB();

app.use(express.json()); // to accept the json data

app.get('/',(req,res)=>{
    res.send('API is running now');
})

app.use('/api/user', userRoutes)
app.use('/api/chat',chatRoutes)
app.use('/api/message',messageRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on PORT ${PORT}`.yellow.bold));