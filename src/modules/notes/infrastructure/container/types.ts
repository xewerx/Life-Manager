export const NOTES_CONTAINER_TYPES = {
  Logger: Symbol("Logger"),

  Controller: {
    GetNotes: Symbol("GetNotesController"),
  },

  Repository: {
    Notes: Symbol("NotesRepository"),
  },
};
