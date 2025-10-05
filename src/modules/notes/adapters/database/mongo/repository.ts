import type { Model } from "mongoose";
import type { Entity } from "../../../domain/entities/entity";

export class MongoRepository<T extends Entity<unknown>> {
  constructor(private model: Model<any>) {}

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  async create(data: T): Promise<void> {
    await this.model.create(data);
  }

  async update(_id: string, _data: T): Promise<void> {
    throw new Error("Not implemented");
  }

  async delete(id: string): Promise<void> {
    await this.model.deleteOne({ id });
  }

  async findAll(): Promise<T[]> {
    return this.model.find();
  }
}
