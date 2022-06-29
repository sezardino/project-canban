import { LocalStorage, LocalStorageKeys, LocalStorageItems, Card, Board, Column } from '@/common';

import { BoardService } from './board';
import { CardService } from './card';
import { ColumnService } from './column';

class DemoService {
  constructor(
    private readonly boardService: BoardService,
    private readonly columnService: ColumnService,
    private readonly cardService: CardService,
  ) {}

  public async getBoards(): Promise<Board[]> {
    return await this.boardService.getAll();
  }

  public async addNewBoard(boardLabel: string): Promise<Board> {
    return await this.boardService.add(boardLabel);
  }

  public async updateBoard(board: Board): Promise<Board> {
    return await this.boardService.update(board);
  }

  public async getBoard(boardId: string): Promise<Board> {
    return await this.boardService.getById(boardId);
  }

  public async deleteBoard(boardId: string): Promise<Board> {
    return await this.boardService.delete(boardId);
  }

  public async getColumns(boardId: string): Promise<Column[]> {
    return await this.columnService.getAll(boardId);
  }

  public async addNewColumn(label: string, boardId: string): Promise<Column> {
    return await this.columnService.add(label, boardId);
  }

  public async updateColumn(column: Column): Promise<Column> {
    return await this.columnService.update(column);
  }

  public async getColumn(columnId: string): Promise<Column> {
    return await this.columnService.getById(columnId);
  }

  public async getCards(boardId: string): Promise<Card[]> {
    return await this.cardService.getAll(boardId);
  }

  public async addNewCard(title: string, columnId: string, boardId: string): Promise<Card> {
    return await this.cardService.add(title, columnId, boardId);
  }

  public async updateCard(card: Card): Promise<Card> {
    return await this.cardService.update(card);
  }

  public async getCard(cardId: string): Promise<Card> {
    return await this.cardService.getById(cardId);
  }
}

const columnService = new ColumnService(new LocalStorage<Column>(LocalStorageKeys.PROJECT, LocalStorageItems.COLUMNS));
const cardService = new CardService(new LocalStorage<Card>(LocalStorageKeys.PROJECT, LocalStorageItems.CARDS));
const boardService = new BoardService(new LocalStorage<Board>(LocalStorageKeys.PROJECT, LocalStorageItems.BOARDS));

export const demoService = new DemoService(boardService, columnService, cardService);
