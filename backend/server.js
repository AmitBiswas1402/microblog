import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import connectMongoDB from './db/connectToMongo.js';

dotenv.config();
const app = express()

console.log(process.env.MONGO_URI);

app.use("/api/auth", authRoutes)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    connectMongoDB();
})