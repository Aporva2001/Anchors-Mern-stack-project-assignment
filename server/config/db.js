const mongoose= require('mongoose');
const URL=process.env.MONGO_URL;
const connectDB = async()=>{
    try {
        await mongoose.connect(toString(URL));
        console.log("Database connected successfully")
    } catch (error) {
        console.log(error)
        console.error("Database connection failed");
        process.exit(0);
    }
}

module.exports= connectDB;
