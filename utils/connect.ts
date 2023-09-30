import mongoose from "mongoose";

export const ConnectToDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI!, {
    dbName: process.env.DB_NAME,
  });
};
