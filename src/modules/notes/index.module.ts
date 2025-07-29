import { Module } from "../module";
import { Method } from "../module.types";
import { makeContainer } from "./infrastructure/container";
import type { Route } from "../module.types";
import type { Request, Response } from "express";
import { NOTES_CONTAINER_TYPES } from "./infrastructure/container/types";
import type { Controller } from "./ports/http/controller";

export class NotesModule extends Module {
  constructor() {
    const container = makeContainer();
    const prefix = "notes";

    super("Notes", prefix, container);

    const getNotesController = container.get<Controller<Request, Response>>(
      NOTES_CONTAINER_TYPES.Controller.GetNotes
    );

    const routes: Route[] = [
      {
        path: "",
        method: Method.GET,
        handler: getNotesController.makeHandler(),
      },
    ];

    this.setRoutes(routes);
  }
}
