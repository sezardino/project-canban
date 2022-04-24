import cn from 'classnames';

import { KanbanBoardProps } from './props';

import { CardData } from '@/common';
import { Column, Card } from '@/components/molecules';
import { storeActions, useAppDispatch } from '@/store';

export const KanbanBoard: React.FC<KanbanBoardProps> = (props) => {
  const { columns, className, ...rest } = props;
  const dispatch = useAppDispatch();
  const {
    demoActions: { changeCardColumn, changeCardOrder },
  } = storeActions;
  const CARD_BG_CLASS = 'after:bg-red-500';

  const toggleCardBorder = (target: HTMLElement) => {
    const card = target.closest('[data-card]');

    if (!card) {
      return;
    }

    if (card.classList.contains(CARD_BG_CLASS)) {
      card.classList.remove(CARD_BG_CLASS);
      return;
    }
    card.classList.add(CARD_BG_CLASS);
  };

  const cardDragStart = (evt: React.DragEvent, task: CardData) => {
    evt.dataTransfer.setData('task', JSON.stringify(task));
  };

  const columnDragEnter = (evt: React.DragEvent) => {
    evt.preventDefault();
    toggleCardBorder(evt.target as HTMLElement);
  };

  const columnDragLeave = (evt: React.DragEvent) => {
    const target = evt.target as HTMLElement;
    toggleCardBorder(target);
  };

  const onCardDrop = (evt: React.DragEvent, dropTask: CardData) => {
    evt.preventDefault();
    evt.stopPropagation();
    const task: CardData = JSON.parse(evt.dataTransfer.getData('task'));
    toggleCardBorder(evt.target as HTMLElement);

    if (task.id === dropTask.id) {
      return;
    }

    if (task.column !== dropTask.column) {
      dispatch(changeCardColumn({ id: task.id, column: dropTask.column }));
    }

    const newOrder = dropTask.order + 1;
    dispatch(changeCardOrder({ id: task.id, order: newOrder }));
  };

  const onColumnDrop = (evt: React.DragEvent, columnId: string) => {
    evt.preventDefault();
    const task: CardData = JSON.parse(evt.dataTransfer.getData('task'));

    if (task.column === columnId) {
      return;
    }

    dispatch(changeCardColumn({ id: task.id, column: columnId }));
  };

  return (
    <ul {...rest} className={cn('flex gap-5', className)}>
      {columns.map((column) => (
        <li key={column.id} className="min-w-[320px] bg-gray-200 rounded-lg shadow-lg">
          <Column
            label={column.label}
            items={column.items}
            onDragOver={(evt) => evt.preventDefault()}
            onDrop={(evt) => onColumnDrop(evt, column.id)}
            onDragEnter={columnDragEnter}
            onDragLeave={columnDragLeave}
          >
            {(card) => (
              <Card
                card={card}
                className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1"
                data-card
                draggable
                onDragStart={(evt) => cardDragStart(evt, card)}
                onDrop={(evt) => onCardDrop(evt, card)}
              />
            )}
          </Column>
        </li>
      ))}
    </ul>
  );
};
