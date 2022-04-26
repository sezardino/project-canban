import { Client } from '@/common/client';
import { Card } from '@/common';
import { AbstractService } from './abstract';

export class CardService extends AbstractService<Card> {
  constructor(readonly client: Client<Card>) {
    super(client);
  }

  public async getAll(boardId: string): Promise<Card[]> {
    const allCards = (await this.client.getAll()) || [];
    return allCards.filter((card) => card.board === boardId);
  }

  public async add(title: string, column: string, board: string): Promise<Card[]> {
    const allCards = await this.getAll(board);
    const lastCardIndex = allCards.length ? allCards[allCards.length - 1].id.split('-')[1] : 0;
    const cardId = `${board}-${+lastCardIndex + 1}`;

    const savedCards = await this.client.add({ board, id: cardId, title, column });

    return savedCards.filter((card) => card.board === board);
  }
}
