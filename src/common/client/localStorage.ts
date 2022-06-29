import { Client } from './types';

export class LocalStorage<U extends { id: string }> implements Client<U> {
  constructor(private readonly key: string, private readonly itemKey: string) {}

  public getAll(): Promise<U[]> {
    return new Promise((resolve) => {
      let dataBase = localStorage.getItem(this.key);

      if (!dataBase) {
        dataBase = JSON.stringify({});
        localStorage.setItem(this.key, dataBase);
      }

      const data = JSON.parse(dataBase);
      const items = data[this.itemKey];

      if (!items) {
        data[this.itemKey] = [];

        localStorage.setItem(this.key, JSON.stringify(data));
      }

      resolve(items || []);
    });
  }

  private save(items: U[]): Promise<U[]> {
    return new Promise((resolve) => {
      const data = JSON.parse(localStorage.getItem(this.key) || '{}');

      data[this.itemKey] = items;

      localStorage.setItem(this.key, JSON.stringify(data));

      resolve(items);
    });
  }

  public async getById(id: string): Promise<U> {
    const items = await this.getAll();

    const neededItem = items.find((item) => item.id === id);

    if (!neededItem) {
      throw new Error('Item not found');
    }

    return neededItem;
  }

  public async add(item: U): Promise<U> {
    const items = await this.getAll();

    items.push(item);

    await this.save(items);

    return item;
  }

  public async update(item: U): Promise<U> {
    const items = await this.getAll();

    const itemIndex = items.findIndex((i) => i.id === item.id);

    if (itemIndex === -1) {
      throw new Error('Item not found');
    }

    items[itemIndex] = item;

    await this.save(items);

    return item;
  }

  public async delete(id: string): Promise<U> {
    const items = await this.getAll();

    const itemIndex = items.findIndex((i) => i.id === id);

    if (itemIndex === -1) {
      throw new Error('Item not found');
    }

    const neededItem = items[itemIndex];

    items.splice(itemIndex, 1);

    await this.save(items);

    return neededItem;
  }
}
