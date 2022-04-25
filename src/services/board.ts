import { Client } from '@/client';
import { Board } from '@/common';
import { AbstractService } from './abstract';

export class BoardService extends AbstractService<Board> {
  constructor(readonly client: Client<Board>) {
    super(client);
  }

  public async getAll(): Promise<Board[]> {
    return await this.client.getAll();
  }

  public async add(label: string): Promise<Board[]> {
    const id = label.toLocaleLowerCase().slice(0, label.length < 3 ? label.length : 3);
    const allBoards = await this.client.getAll();

    const isIdUnique = allBoards.find((board) => board.id === id);
    const isLabelUnique = allBoards.find((board) => board.label === label);

    if (isLabelUnique) {
      throw new Error(`Board with label: ${label} is already taken`);
    }

    if (isIdUnique) {
      throw new Error(`Board with id: ${id} is already taken`);
    }

    return await this.client.add({ id, label });
  }
}
