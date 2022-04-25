import { Client } from '@/client';
import { Card } from '@/common';
import { AbstractService } from './abstract';

export class CardService extends AbstractService<Card> {
  constructor(readonly client: Client<Card>) {
    super(client);
  }

  public async getAll(boardId: string): Promise<Card[]> {
    const allColumns = await this.client.getAll();
    return allColumns.filter((column) => column.board === boardId);
  }

  public async add(title: string, column: string, board: string): Promise<Card[]> {
    const allCards = await this.client.getAll();
    const lastCardIndex = allCards[allCards.length - 1].id.split('-')[1];
    const cardId = `${board}-${+lastCardIndex + 1}`;

    return await this.client.add({ board, id: cardId, title, column });
  }
}
