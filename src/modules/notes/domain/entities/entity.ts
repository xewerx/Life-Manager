import { v4 as uuidv4 } from "uuid";

export abstract class Entity<T> {
  public readonly id: string;
  protected readonly props: T;

  constructor(props: T) {
    this.id = uuidv4();
    this.props = props;
  }

  public abstract equals(other: Entity<T>): boolean;

  public static isEntity(entity: unknown): entity is Entity<unknown> {
    return entity instanceof Entity;
  }

  public toObject() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
