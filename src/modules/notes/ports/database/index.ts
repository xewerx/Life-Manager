export interface Database<Config> {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  setConfig(config: Config): void;
  getConfig(): Config;
}
