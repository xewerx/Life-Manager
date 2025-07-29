import type { Logger } from "../../../../shared/make-module-logger";
import { Controller } from "../../adapters/http/controller";
import type { Request, Response } from "express";
import { NOTES_CONTAINER_TYPES } from "../../infrastructure/container/types";
import { inject, injectable } from "inversify";
import type { Note } from "../dto/note";

@injectable()
export class GetNotesController extends Controller<Note[]> {
  constructor(
    @inject(NOTES_CONTAINER_TYPES.Logger)
    protected readonly logger: Logger
  ) {
    super(logger);
  }

  async handle(_req: Request, _res: Response): Promise<Note[]> {
    return [
      {
        name: "note1",
      },
    ];
  }
}
