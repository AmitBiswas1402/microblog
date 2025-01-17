import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import connectMongoDB from './db/connectToMongo.js';

dotenv.config();
const app = express()

app.use(express.json()) // to parse req.body

app.use("/api/auth", authRoutes)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    connectMongoDB();
})