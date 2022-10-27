const express= require("express");
const mongoose= require('mongoose');
const app = express();
const PORT = 8000;
const connectDB =async ()=>{
    mongoose.connect("mongodb://localhost:27017/e-commerce");
    //here ecommerce is the database in the localhost
    const productSchema= new mongoose.Schema({});
    const product= mongoose.model("products",productSchema);
    //here product is the mongoose model linked to productSchema
    //here products is the collection in the ecommerce database
    //which is linked to product model of mongoose, which is then linked to 
    //productSchema of mongoose Schema.
    const data = await product.find();
    console.log("database connected", data);
}
//here we call the connectDB function which connects to the database
connectDB();

app.listen(PORT);