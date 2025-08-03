import type { Logger } from "../../../../shared/make-module-logger";
import { Controller } from "../../adapters/http/controller";
import type { Request, Response } from "express";
import { NOTES_CONTAINER_TYPES } from "../../infrastructure/container/types";
import { inject, injectable } from "inversify";
import { z } from "zod";
import type { CreateNoteCommand } from "../commands/create-note";

const noteSchema = z.object({
  title: z.string(),
  content: z.string(),
});

type NoteBody = z.infer<typeof noteSchema>;

@injectable()
export class PostNotesController extends Controller<NoteBody, void> {
  constructor(
    @inject(NOTES_CONTAINER_TYPES.Logger)
    protected readonly logger: Logger,
    @inject(NOTES_CONTAINER_TYPES.Command.CreateNote)
    private readonly createNoteCommand: CreateNoteCommand
  ) {
    super(logger);
  }

  async handle(req: Request, _res: Response): Promise<void> {
    const { title, content } = req.body;

    await this.createNoteCommand.execute(title, content);
  }

  async validate(req: Request): Promise<NoteBody> {
    const { title, content } = noteSchema.parse(req.body);

    return { title, content };
  }
}
