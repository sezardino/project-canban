export interface Card {
  status: string;
  title: string;
  order: number;
  id: string;
}

export interface Status {
  id: string;
  label: string;
}

export interface ColumnWithCards extends Status {
  items: Card[];
}

export type CardData = Pick<Card, 'id' | 'order' | 'status' | 'title'>;
