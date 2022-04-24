import { Heading } from '@/components/atoms';
import cn from 'classnames';
import React from 'react';
import { ColumnProps } from './props';

export const Column: React.FC<ColumnProps> = (props) => {
  const { className, label, items, children, ...rest } = props;

  return (
    <div {...rest} className={cn('h-full', className)}>
      <header className="bg-gray-100 p-4">
        <Heading type="h3" styledAs="h6">
          {label}
        </Heading>
      </header>
      <ul className="flex flex-col gap-4 p-1 h-full">
        {items.map((task) => (
          <li key={task.id} className="cursor-grab">
            {children(task)}
          </li>
        ))}
      </ul>
    </div>
  );
};
