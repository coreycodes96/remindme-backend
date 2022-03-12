import express from "express";
import mongoose from "mongoose";
import env from "dotenv";
env.config();
import cors from "cors";
import deserializeMiddleware from "./src/middleware/deserializeMiddleware.js";
import userRoutes from "./src/routes/userRoutes.js";
import reminderRoutes from "./src/routes/reminderRoutes.js";
import morgan from "morgan";

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(deserializeMiddleware);
app.use(morgan("dev"));

//Connect to mongoDB database
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Port
const PORT = process.env.PORT || 5000;

//Routes
app.use('/user', userRoutes);
app.use('/reminder', reminderRoutes);

//Start express server
app.listen(PORT, () => {
    console.log(`You are connected on port ${PORT}`);
});