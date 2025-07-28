import "reflect-metadata";
import type { Request, Response } from "express";
import { Method, type Route } from "../module.types";
import { NotesModule } from "./index.module";

const routes: Route[] = [
  {
    path: "",
    method: Method.GET,
    handler: (_req: Request, res: Response) => {
      res.json({
        status: "ok",
        timestamp: new Date().toISOString(),
      });
    },
  },
];

const notesModule = new NotesModule();

notesModule.setRoutes(routes);

export default notesModule;
