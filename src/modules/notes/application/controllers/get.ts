import { makeModuleLogger } from "../../../../shared/make-module-logger";
import { Controller } from "../../adapters/http/controller";
import type { Request, Response } from "express";

type Note = {
  name: string;
};

export const GetNotesController = new Controller<Note[]>(
  makeModuleLogger({
    module: "notes",
  }),
  async (req: Request, res: Response): Promise<Note[]> => {
    console.log(req, res);
    return [
      {
        name: "note1",
      },
    ];
  }
);
