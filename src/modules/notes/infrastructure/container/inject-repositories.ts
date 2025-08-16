import type { Container } from "inversify";
import { NOTES_CONTAINER_TYPES } from "./types";
import { NotesMongoRepository } from "../../adapters/database/mongo/notes-repository";
import { NotesSearchRepository } from "../../adapters/database/elastic-search/notes-search-repository";

export const injectRepositories = (container: Container) => {
  container
    .bind(NOTES_CONTAINER_TYPES.Repository.Notes)
    .to(NotesMongoRepository);

  container
    .bind(NOTES_CONTAINER_TYPES.Repository.NotesSearch)
    .to(NotesSearchRepository);
};
