import { ColumnWithCards } from '@/common';
import { HTMLProps } from 'react';

export interface KanbanBoardProps extends HTMLProps<HTMLUListElement> {
  columns: ColumnWithCards[];
}
