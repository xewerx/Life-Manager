import type { Container } from "inversify";
import { GetNotesController } from "../../application/controllers/get";
import { NOTES_CONTAINER_TYPES } from "./types";

export const injectControllers = (container: Container) => {
  container
    .bind(NOTES_CONTAINER_TYPES.Controller.GetNotes)
    .to(GetNotesController);
};
