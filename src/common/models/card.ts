export interface Card {
  column: Column['id'];
  title: string;
  order: number;
  id: string;
}

export interface Column {
  id: string;
  label: string;
}

export interface ColumnWithCards extends Column {
  items: Card[];
}

export type CardData = Pick<Card, 'id' | 'order' | 'column' | 'title'>;
