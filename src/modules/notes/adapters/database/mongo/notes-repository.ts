import { MongoRepository } from "./repository";
import { injectable } from "inversify";
import type { Note } from "../../../domain/entities/note";
import type { NotesRepository } from "../../../domain/repositories/notes-repository";
import { NoteModel, type NoteSchema } from "./models/note";
import type { Model } from "mongoose";

@injectable()
export class NotesMongoRepository
  extends MongoRepository<NoteSchema>
  implements NotesRepository
{
  constructor() {
    super(NoteModel);
  }
}
