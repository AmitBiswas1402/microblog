import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB host: ${conn.connection.host}`);
        
        
    } catch (error) {
        console.error(`Error connection to mongodb: ${error.message}`);
        process.exit();        
    }
}

export default connectMongoDB;