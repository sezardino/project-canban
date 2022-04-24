import { HTMLProps } from 'react';
import { ColumnWithCards } from '@/common';

export interface KanbanTemplateProps extends HTMLProps<HTMLUListElement> {
  columns: ColumnWithCards[];
  changeStatus: (id: string, status: string) => void;
  changeOrder: (id: string, order: number) => void;
}
