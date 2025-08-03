import { MongoRepository } from "./repository";
import { injectable } from "inversify";
import { NoteModel, type NoteModelType } from "./models/note";

@injectable()
export class NotesMongoRepository extends MongoRepository<NoteModelType> {
  constructor() {
    super(NoteModel);
  }
}
