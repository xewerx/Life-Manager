export abstract class Entity<T> {
  constructor(public readonly id: string, public readonly props: T) {}
  public abstract equals(other: Entity<T>): boolean;

  public static isEntity(entity: unknown): entity is Entity<unknown> {
    return entity instanceof Entity;
  }

  public static toObject<T>(entity: Entity<T>): T & { id: string } {
    return {
      id: entity.id,
      ...entity.props,
    };
  }
}
