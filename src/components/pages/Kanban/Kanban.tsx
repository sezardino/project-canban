import { CardData } from '@/common';
import { Card, Column } from '@/components/molecules';

import { KanbanTemplateProps } from './props';

export const KanbanTemplate: React.FC<KanbanTemplateProps> = (props) => {
  const { columns, changeStatus, changeOrder, ...rest } = props;
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

    if (task.status !== dropTask.status) {
      changeStatus(task.id, dropTask.status);
    }

    const newOrder = dropTask.order + 1;
    changeOrder(task.id, newOrder);
  };

  const onColumnDrop = (evt: React.DragEvent, boardId: string) => {
    evt.preventDefault();
    const task: CardData = JSON.parse(evt.dataTransfer.getData('task'));

    if (task.status === boardId) {
      return;
    }

    changeStatus(task.id, boardId);
  };
  return (
    <ul {...rest} className="flex gap-5 mt-5">
      {columns.map((column) => (
        <li key={column.id} className="min-w-[320px] bg-gray-200 max-h-screen h-screen rounded-lg shadow-lg">
          <Column
            {...column}
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
