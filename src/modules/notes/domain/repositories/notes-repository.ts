import type { Repository } from "./repository";
import type { Note } from "../entities/note";

export interface NotesRepository
  extends Repository<ReturnType<typeof Note.toObject>> {}
