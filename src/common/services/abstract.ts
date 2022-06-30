import { Client } from '@/common';

interface IAbstractService<T extends { id: string }> {
  getAll(...args: unknown[]): Promise<T[]>;
  getById(id: string): Promise<T>;
  update(id: string, fields: Record<string, any>): Promise<T>;
  add(...args: unknown[]): Promise<T>;
}

export abstract class AbstractService<T extends { id: string }> implements IAbstractService<T> {
  constructor(readonly client: Client<T>) {}

  public async getAll(...args: unknown[]): Promise<T[]> {
    throw new Error('Method not implemented.');
  }

  public async getById(id: string): Promise<T> {
    return await this.client.getById(id);
  }

  public async update(id: string, fields: Record<string, any>): Promise<T> {
    return await this.client.update(id, fields);
  }

  public async add(...args: unknown[]): Promise<T> {
    throw new Error('Method not implemented.');
  }

  public async delete(id: string): Promise<T> {
    return this.client.delete(id);
  }
}
