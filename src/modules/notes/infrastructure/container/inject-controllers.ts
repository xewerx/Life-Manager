import type { Container } from "inversify";
import { GetNotesController } from "../../application/controllers/get";
import { NOTES_CONTAINER_TYPES } from "./types";
import { PostNotesController } from "../../application/controllers/post";

export const injectControllers = (container: Container) => {
  container
    .bind(NOTES_CONTAINER_TYPES.Controller.GetNotes)
    .to(GetNotesController);

  container
    .bind(NOTES_CONTAINER_TYPES.Controller.PostNotes)
    .to(PostNotesController);
};
