import type { Repository } from "../../../domain/repositories/repository";
import type { Model } from "mongoose";

export class MongoRepository<T> implements Repository<T> {
  constructor(private model: Model<T>) {}

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
