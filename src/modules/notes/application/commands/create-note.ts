import { inject, injectable } from "inversify";
import type { NotesRepository } from "../../domain/repositories/notes-repository";
import { Note } from "../../domain/entities/note";
import { NOTES_CONTAINER_TYPES } from "../../infrastructure/container/types";

@injectable()
export class CreateNoteCommand {
  constructor(
    @inject(NOTES_CONTAINER_TYPES.Repository.Notes)
    private readonly notesRepository: NotesRepository
  ) {}

  async execute(title: string, content: string): Promise<void> {
    const note = new Note(title, content);
    await this.notesRepository.create(note);
  }
}
