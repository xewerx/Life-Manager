import { Module } from "../module";
import { Method } from "../module.types";
import { makeContainer } from "./infrastructure/container";
import type { Route } from "../module.types";
import type { Request, Response } from "express";
import { NOTES_CONTAINER_TYPES } from "./infrastructure/container/types";
import type { Controller } from "./ports/http/controller";

export class NotesModule extends Module {
  constructor() {
    super("Notes", "notes");
  }

  async init() {
    const container = await makeContainer();

    const getNotesController = container.get<Controller<Request, Response>>(
      NOTES_CONTAINER_TYPES.Controller.GetNotes
    );

    const postNotesController = container.get<Controller<Request, Response>>(
      NOTES_CONTAINER_TYPES.Controller.PostNotes
    );

    const routes: Route[] = [
      {
        path: "",
        method: Method.GET,
        handler: getNotesController.makeHandler(),
      },
      {
        path: "",
        method: Method.POST,
        handler: postNotesController.makeHandler(),
      },
    ];

    this.setRoutes(routes);
  }
}
