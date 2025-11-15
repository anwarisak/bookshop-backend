import mongoose from "mongoose";

const connectdb = async () => {
  await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("connected to database");
    })
    .catch(() => {
      console.error("connection failed");
    });
};

export default connectdb;
