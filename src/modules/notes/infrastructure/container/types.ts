export const NOTES_CONTAINER_TYPES = {
  Logger: Symbol("Logger"),

  Controller: {
    GetNotes: Symbol("GetNotesController"),
    PostNotes: Symbol("PostNotesController"),
  },

  Repository: {
    Notes: Symbol("NotesRepository"),
    NotesSearch: Symbol("NotesSearchRepository"),
  },

  SearchRepository: {
    Notes: Symbol("NotesSearchRepository"),
  },

  Command: {
    CreateNote: Symbol("CreateNoteCommand"),
  },

  Config: {
    ElasticSearch: Symbol("ElasticSearchConfig"),
  },
};
