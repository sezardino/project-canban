export interface Task {
  name: string;
  id: string;
}

export type Card = Pick<Task, 'id' | 'name'>;
