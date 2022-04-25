import { Client } from '@/client';

interface IAbstractService<T extends { id: string }> {
  getAll(...args: unknown[]): Promise<T[]>;
  getById(id: string): Promise<T>;
  update(item: T): Promise<T>;
  add(...args: unknown[]): Promise<T[]>;
}

export abstract class AbstractService<T extends { id: string }> implements IAbstractService<T> {
  constructor(readonly client: Client<T>) {}

  public async getAll(...args: unknown[]): Promise<T[]> {
    throw new Error('Method not implemented.');
  }

  public async getById(id: string): Promise<T> {
    return await this.client.getById(id);
  }

  public async update(item: T): Promise<T> {
    return await this.client.update(item);
  }

  add(...args: unknown[]): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
}
