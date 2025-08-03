import type { Logger } from "../../../../shared/make-module-logger";
import type { Controller as ControllerPort } from "../../ports/http/controller";
import { ErrorCodes } from "../../ports/http/error-codes";
import { ResponseCodes } from "../../ports/http/response-codes";
import type { Request, Response } from "express";

export abstract class Controller<ReqBody, ResBody>
  implements ControllerPort<Request, Response>
{
  constructor(protected readonly logger: Logger) {}

  public abstract handle(req: Request, res: Response): Promise<ResBody>;

  public abstract validate(req: Request): Promise<ReqBody>;

  public makeHandler(): (req: Request, res: Response) => Promise<void> {
    return async (req: Request, res: Response) => {
      try {
        await this.validate(req);
      } catch (err) {
        this.logger.error({ err }, "Error validating request");
        res
          .status(ErrorCodes.BAD_REQUEST as number)
          .json({ error: "Bad request" });

        return;
      }

      try {
        this.logger.info("Request received");
        const result = await this.handle(req, res);
        this.logger.info("Request handled");

        res.status(ResponseCodes.OK).json(result);
      } catch (err) {
        this.logger.error({ err }, "Error handling request");
        res
          .status(ErrorCodes.INTERNAL_SERVER_ERROR as number)
          .json({ error: "Internal server error" });
      }
    };
  }
}
