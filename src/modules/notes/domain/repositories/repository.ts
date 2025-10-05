import type { Entity } from "../entities/entity";

export interface Repository<T extends Entity<unknown>> {
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  create(data: T): Promise<void>;
  update(id: string, data: T): Promise<void>;
  delete(id: string): Promise<void>;
}
