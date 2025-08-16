import { ElasticSearchRepository } from "./search-repository";
import type { Note, NoteObject } from "../../../domain/entities/note";
import type { ElasticSearchConfig } from "./types";
import type { SearchRepository } from "../../../domain/repositories/search-repository";
import type { Logger } from "../../../../../shared/make-module-logger";
import { inject, injectable } from "inversify";
import { NOTES_CONTAINER_TYPES } from "../../../infrastructure/container/types";

@injectable()
export class NotesSearchRepository
  extends ElasticSearchRepository<NoteObject>
  implements SearchRepository<NoteObject>
{
  constructor(
    @inject(NOTES_CONTAINER_TYPES.Config.ElasticSearch)
    config: ElasticSearchConfig,
    @inject(NOTES_CONTAINER_TYPES.Logger) logger: Logger
  ) {
    super(config, logger);
  }
}
