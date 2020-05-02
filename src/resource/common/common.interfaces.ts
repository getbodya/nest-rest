export abstract class DBRepository<T, R> {
  abstract async get(): Promise<R[]>;
  abstract async getById(id: string): Promise<R>;
  abstract async create(data: T): Promise<R>;
  abstract async update(id: string, data: T): Promise<boolean>;
  abstract async delete(id: string): Promise<boolean>;
}
