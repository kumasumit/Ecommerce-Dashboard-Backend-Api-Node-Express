// in the router file we require the express instance and the express.Router instance
const express = require('express');
const router = express.Router();
//then we require the models required to process the controller actions
const User = require('../models/User');
const Product = require('../models/Product');

//1. Sign-Up Api 
//An api with post request to rgister/signup - create a new user in the database
router.post("/register", async (req, res)=>{
    let user = new User(req.body);
    let result = await user.save();
    //currently result is a json object, we need to convert to object data type
    result.toObject();
    //now result is of type object
    //delete result.password will delete the password key value pair from result object, here result is the object and passoword is the key.
    delete result.password;
    //after saving the created user we send back the created user as response without the password field
    res.send(result);
})

//2. Log-In Api 
//An api with post request to login - create a new session for sign-up user in the database
router.post("/login", async (req, res)=>{
    //destructure email and password from req.body
    const {email, password} = req.body;
    //check if both fields are there, means both the fields exists, they are not empty
    if(email && password)
    {
      let user = await User.findOne(req.body).select('-password');
      if(user){
        //if user is found
        //send back the user without the password field
        res.send(user);
      }else{
        //if no user is found corresponding to entered details
        res.send({result: "Invalid User credentials"})
      }
    }else{
        //if any field email and password is empty
        res.send({result: "Please enter both the fields"})
    }

})

//3. Add Product Api 
//An api with post request to add - create a new produc in the database.
router.post("/add-product", async (req, res)=>{

    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);

})
//finally we export the router at the bottom
module.exports = router