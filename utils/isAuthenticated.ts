import { User } from "@/models/user";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req) => {
  const cookie = req.headers.get("cookie");
  if (!cookie) return null;
  //   console.log(cookie);
  const token = cookie.split("=")[1];
  //   console.log(token);
  const decodedData = jwt.verify(token, process.env.JWT_SECRET!);
  console.log(decodedData);
  return await User.findById(decodedData._id);
};
