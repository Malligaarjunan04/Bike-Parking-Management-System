import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

export const DBConnect = async () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongoose DB  Connected"))
    .catch((e) => console.log(e.message));
};
