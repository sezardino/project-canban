import { Client } from '@/client';
import { Column } from '@/common';
import { AbstractService } from './abstract';

export class ColumnService extends AbstractService<Column> {
  constructor(readonly client: Client<Column>) {
    super(client);
  }

  public async getAll(boardId: string): Promise<Column[]> {
    const allColumns = await this.client.getAll();
    return allColumns.filter((column) => column.board === boardId);
  }

  public async add(label: string, boardId: string): Promise<Column[]> {
    const allColumns = await this.client.getAll();
    const columnId = label.toLocaleLowerCase().replace(' ', '-');

    const hasColumn = allColumns.find((column) => column.label === label || column.id === columnId);

    if (hasColumn) {
      throw new Error('Board already exists');
    }

    return await this.client.add({ board: boardId, id: columnId, label: label });
  }
}
