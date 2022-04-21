import { HTMLProps } from 'react';

export interface ColumnProps<T> extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
  items: (T & { id: string })[];
  label: string;
  children: (slide: T & { id: string }) => JSX.Element;
}
