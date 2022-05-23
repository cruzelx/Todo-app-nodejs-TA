import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI as string)
  .then((): void => {
    console.log("Connected to database");
  })
  .catch((err): void => console.log(`MONGODB_ERROR: ${err.reason}`));
