export interface Database<T> {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  setConfig(config: T): void;
  getConfig(): T;
}
