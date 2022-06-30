export interface CardHistory {
  action: string;
  date: string;
}

export interface Card {
  column: Column['id'];
  readonly board: Board['id'];
  title: string;
  description: string;
  history: CardHistory[];
  readonly id: string;
}

export interface Board {
  readonly id: string;
  label: string;
}

export interface Column {
  readonly board: Board['id'];
  readonly id: string;
  label: string;
}

export interface ColumnWithCards extends Column {
  items: Card[];
}

export type CardData = Pick<Card, 'id' | 'column' | 'title' | 'board' | 'description' | 'history'>;
