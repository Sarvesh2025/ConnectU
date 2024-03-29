import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRouter);


const CONNECTION_URL="mongodb+srv://sarveshprofessional2004:HqHfqelcYvNYwhK4@connectu.okbmttn.mongodb.net/?retryWrites=true&w=majority&appName=connectu"
const PORT = 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => 
     app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
        ))
    .catch((error) => console.log(`${error} did not connect`));


























// HqHfqelcYvNYwhK4   ->password
    