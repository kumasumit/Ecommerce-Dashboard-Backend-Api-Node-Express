const express= require("express");
//require the mongodb connect function
const connectMongoDB = require('./config/db');
const app = express();
const PORT = 8000;


//here we call the connectDB function which connects to the database
//ask rahul ?
//whethether the mongoDB connect function should always be at the top or it can be anywhere
connectMongoDB();
//this is the middleware to read json data sent in the body of the request
app.use(express.json());
//All te routes will go through root.js inside routes
//make sure app.use for routes is at the end of the index/server entry file,
//so that routes are loaded only after all the other middlewares that is after all app.use cases
app.use('/', require('./routes/root'));
//app.use for routes must be at the bottom just before app.listen()
//ask rahul why ?
app.listen(PORT);