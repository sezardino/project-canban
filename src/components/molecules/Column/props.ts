import { CardData } from '@/common';
import { HTMLProps } from 'react';

export interface ColumnProps extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
  items: CardData[];
  label: string;
  children: (card: CardData) => JSX.Element;
}
