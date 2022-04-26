export interface Client<T extends { id: string }> {
  getAll: () => Promise<T[]>;
  getById: (id: string) => Promise<T>;
  update: (item: T) => Promise<T>;
  add: (item: T) => Promise<T[]>;
  delete: (id: string) => Promise<T>;
}
