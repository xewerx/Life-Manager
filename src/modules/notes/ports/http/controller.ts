export interface Controller<Req, Res> {
  makeHandler(): (req: Req, res: Res) => Promise<void>;
}
