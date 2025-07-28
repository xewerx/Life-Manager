export abstract class Controller<Req, Res> {
  public abstract handle(req: Req, res: Res): Promise<void>;
}
