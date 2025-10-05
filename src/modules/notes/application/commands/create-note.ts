import { inject, injectable } from "inversify";
import type { NotesRepository } from "../../domain/repositories/notes-repository";
import { Note } from "../../domain/entities/note";
import { NOTES_CONTAINER_TYPES } from "../../infrastructure/container/types";
import { Command } from "./command";
import type { NotesSearchRepository } from "../../adapters/database/elastic-search/notes-search-repository";

type CreateNoteCommandInput = {
  title: string;
  content: string;
};

@injectable()
export class CreateNoteCommand extends Command<CreateNoteCommandInput> {
  constructor(
    @inject(NOTES_CONTAINER_TYPES.Repository.Notes)
    private readonly notesRepository: NotesRepository,
    @inject(NOTES_CONTAINER_TYPES.Repository.NotesSearch)
    private readonly notesSearchRepository: NotesSearchRepository
  ) {
    super();
  }

  async execute(input: CreateNoteCommandInput): Promise<void> {
    const note = new Note(input.title, input.content);
    await this.notesRepository.create(note);

    // TODO: move it to async event handler
    await this.notesSearchRepository.index("notes", note.id, note);
  }
}
