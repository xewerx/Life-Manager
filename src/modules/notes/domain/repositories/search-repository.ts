import type { Entity } from "../entities/entity";

export interface SearchRepository<T extends Entity<unknown>> {
  findById(index: string, id: string): Promise<T | null>;
  index(index: string, id: string, document: T): Promise<void>;
  delete(index: string, id: string): Promise<void>;
  search(index: string, query: unknown): Promise<T[]>;
}
