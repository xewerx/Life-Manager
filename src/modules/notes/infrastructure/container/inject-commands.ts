import type { Container } from "inversify";
import { CreateNoteCommand } from "../../application/commands/create-note";
import { NOTES_CONTAINER_TYPES } from "./types";

export const injectCommands = (container: Container) => {
  container
    .bind(NOTES_CONTAINER_TYPES.Command.CreateNote)
    .to(CreateNoteCommand);
};
