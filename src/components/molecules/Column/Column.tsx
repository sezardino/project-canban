import { Heading } from '@/components/atoms';
import cn from 'classnames';
import React from 'react';
import { ColumnProps } from './props';

export const Column = <T extends unknown>(props: ColumnProps<T>): JSX.Element => {
  const { className, label, items, children, ...rest } = props;

  return (
    <div {...rest} className={cn('grid items-start gap-2 max-w-xs bg-slate-200 p-2 rounded-md', className)}>
      <header>
        <Heading type="h3" styledAs="h6">
          {label}
        </Heading>
      </header>
      {items.map((item) => (
        <React.Fragment key={item.id}>{children(item)}</React.Fragment>
      ))}
    </div>
  );
};
