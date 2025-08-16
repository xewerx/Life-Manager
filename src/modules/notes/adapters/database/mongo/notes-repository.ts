import { MongoRepository } from "./repository";
import { injectable } from "inversify";
import type { NotesRepository } from "../../../domain/repositories/notes-repository";
import { NoteModel, type NoteSchema } from "./models/note";

@injectable()
export class NotesMongoRepository
  extends MongoRepository<NoteSchema>
  implements NotesRepository
{
  constructor() {
    super(NoteModel);
  }
}
