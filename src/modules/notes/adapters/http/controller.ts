import { injectable } from "inversify";
import type { Logger } from "../../../../shared/make-module-logger";
import type { Controller as ControllerPort } from "../../ports/http/controller";
import { ErrorCodes } from "../../ports/http/error-codes";
import { ResponseCodes } from "../../ports/http/response-codes";
import type { Request, Response } from "express";

@injectable()
export class Controller<ResBody> implements ControllerPort<Request, Response> {
  constructor(
    protected readonly logger: Logger,
    private readonly handler: (req: Request, res: Response) => Promise<ResBody>
  ) {}

  public async handle(req: Request, res: Response): Promise<void> {
    try {
      this.logger.info({ req }, "Request received");
      const result = await this.handler(req, res);

      res.status(ResponseCodes.OK).json(result);
    } catch (error) {
      this.logger.error({ error }, "Error handling request");
      res
        .status(ErrorCodes.INTERNAL_SERVER_ERROR as number)
        .json({ error: "Internal server error" });
    }
  }
}
