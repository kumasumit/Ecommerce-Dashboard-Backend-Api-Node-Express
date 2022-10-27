// in the router file we require the express instance and the express.Router instance
const express = require('express');
const router = express.Router();
//then we require the models required to process the controller actions
const User = require('../models/User');


//1. Sign-Up Api 
//A post to rgister/signup - create a new user in the database
router.post("/register", async (req, res)=>{
    let user = new User(req.body);
    let result = await user.save();
    //after saving the created user we send back the created user as response
    res.send(result);
})

//finally we export the router at the bottom
module.exports = router