import { type InferSchemaType, Schema, model } from "mongoose";

export interface NoteSchema extends Schema {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

const noteSchema = new Schema<NoteSchema>({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: false, default: "" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
});

export const NoteModel = model("Note", noteSchema);
