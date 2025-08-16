export abstract class Command<T> {
  abstract execute(data: T): Promise<void>;
}
