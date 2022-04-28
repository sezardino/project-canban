import { asyncActions, useAppDispatch } from '@/store';
import { CardData } from '@/common';

import { Button, Card, Column } from '@/components';

import { KanbanTemplateProps } from './props';

export const KanbanTemplate: React.FC<KanbanTemplateProps> = (props) => {
  const dispatch = useAppDispatch();
  const { columns, ...rest } = props;
  const { updateCard } = asyncActions;
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
      dispatch(updateCard({ ...task, column: dropTask.column }));
    }
  };

  const onColumnDrop = (evt: React.DragEvent, columnId: string) => {
    evt.preventDefault();
    const task: CardData = JSON.parse(evt.dataTransfer.getData('task'));

    if (task.column === columnId) {
      return;
    }

    dispatch(updateCard({ ...task, column: columnId }));
  };

  return (
    <div className="px-10">
      <header className="flex justify-between py-10">
        <h1 className="text-4xl">Kanban Board</h1>
        <div className="flex gap-2">
          <Button>Add New Task</Button>
          <Button>Add New Column</Button>
        </div>
      </header>
      <ul {...rest} className="flex gap-5">
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
    </div>
  );
};
