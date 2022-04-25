import { HTMLProps } from 'react';
import { ColumnWithCards } from '@/common';

export interface KanbanTemplateProps extends HTMLProps<HTMLUListElement> {
  columns: ColumnWithCards[];
}
