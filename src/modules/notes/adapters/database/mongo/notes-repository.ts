import type { NotesRepository } from "../../../domain/repositories/notes-repository";
import type { Note } from "../../../domain/entities/note";
import { MongoRepository } from "./repository";
import { injectable } from "inversify";
import { NoteModel } from "./models/note";
import type { Model } from "mongoose";

@injectable() // domain Note can not be here
export class NotesMongoRepository
  extends MongoRepository<Note>
  implements NotesRepository
{
  constructor() {
    const model = NoteModel as Model<Note>;
    super(model);
  }
}
