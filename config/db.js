const mongoose= require('mongoose');
const mongoURI = "mongodb://localhost:27017/e-commerce";
//here ecommerce is the database in the localhost to which you want to connect
const connectMongoDB =async ()=>{
    await mongoose.connect(mongoURI);
    
    // const productSchema= new mongoose.Schema({});
    // const product= mongoose.model("products",productSchema);
    // //here product is the mongoose model linked to productSchema
    // //here products is the collection in the ecommerce database
    // //which is linked to product model of mongoose, which is then linked to 
    // //productSchema of mongoose Schema.
    // const data = await product.find();
    console.log("Connected to MongoDB Sucessfully");
}
//export the MongoDb connect function.
module.exports = connectMongoDB;