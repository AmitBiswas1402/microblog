import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectMongoDB from './db/connectToMongo.js';

dotenv.config();
const app = express();

app.use(express.json()); // to parse req.body
app.use(express.urlencoded({ extended: true })); // to parse form data

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectMongoDB();
});
