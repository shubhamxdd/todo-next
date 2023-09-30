import mongoose from "mongoose";

export const ConnectToDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGODB_URI!, {
    dbName: process.env.DB_NAME,
  });
  console.log(`DB connected: ${connection.host}`);
};
