import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
});

export const NoteModel = mongoose.model("Note", noteSchema);
