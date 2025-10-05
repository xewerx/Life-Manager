import { MongoRepository } from "./repository";
import { injectable } from "inversify";
import type { NotesRepository } from "../../../domain/repositories/notes-repository";
import { NoteModel, type NoteSchema } from "./models/note";
import type { Note } from "../../../domain/entities/note";

@injectable()
export class NotesMongoRepository
  extends MongoRepository<Note>
  implements NotesRepository
{
  constructor() {
    super(NoteModel);
  }
}
