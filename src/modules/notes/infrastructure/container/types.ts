export const NOTES_CONTAINER_TYPES = {
  Logger: Symbol("Logger"),

  Controller: {
    GetNotes: Symbol("GetNotesController"),
    PostNotes: Symbol("PostNotesController"),
  },

  Repository: {
    Notes: Symbol("NotesRepository"),
  },

  Command: {
    CreateNote: Symbol("CreateNoteCommand"),
  },
};
