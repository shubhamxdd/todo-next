import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: [true, "Email must be unique."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    select: true,
    minLength: [3, "Password must be at least 3 characters."],
  },
});

mongoose.models = {};

export const User = mongoose.model("User", schema);
