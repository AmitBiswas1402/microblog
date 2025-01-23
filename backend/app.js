import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongo from "./db/connectToMongo.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Add middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to parse cookies
app.use(cookieParser());

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToMongo();
});

export default app;
