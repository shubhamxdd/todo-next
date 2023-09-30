import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required."],
    minLength: [3, "Title must be at least 3 characters."],
    maxLength: [30, "Title must be at most 30 characters."],
  },
  description: {
    type: String,
    required: [true, "Description is required."],
    minLength: [3, "Description must be at least 3 characters."],
    maxLength: [100, "Description must be at most 100 characters."],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is required."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Task = mongoose.model("Task", schema);
