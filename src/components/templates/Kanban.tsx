import { useMemo } from 'react';

import { useAppDispatch, useAppSelector, asyncActions } from '@/store';
import { Button, CardModal, KanbanBoard } from '@/components';
import { useUI } from '@/context';

export const KanbanTemplate = () => {
  const { addErrorToast, addWarningToast } = useUI();
  const { currentBoard, cards, columns, selectedCard } = useAppSelector((state) => state.demoBoard);
  const dispatch = useAppDispatch();

  const addColumnHandler = () => {
    if (!currentBoard) {
      return;
    }

    const label = prompt('Enter new board name', '');

    if (!label) {
      return addWarningToast('You must enter name');
    }

    if (columns.find((column) => column.label === label)) {
      return addErrorToast('Board with this name already exists');
    }

    const id = label.replace(' ', '-').toLowerCase();

    if (columns.find((column) => column.id === id)) {
      return addErrorToast(`Board with this name(${id}) already exists`);
    }

    dispatch(asyncActions.addColumn({ label, boardId: currentBoard.id }));
  };

  const addCardHandler = () => {
    if (!currentBoard) {
      return;
    }

    if (!columns.length) {
      return addWarningToast('You must create at least one column');
    }

    const title = prompt('Enter new board title', '');
    if (!title) {
      return addWarningToast('You must enter title');
    }

    dispatch(asyncActions.addCard({ title, columnId: columns[0].id, boardId: currentBoard.id }));
  };

  const kanbanContent = useMemo(() => {
    return columns.map((column) => ({
      ...column,
      items: cards.filter((card) => card.column === column.id),
    }));
  }, [cards, columns]);

  return (
    <div className="h-full flex flex-col">
      <header className="flex justify-between py-10 px-10">
        <h1 className="text-4xl">Kanban Board</h1>
        <div className="flex gap-2">
          <Button onClick={addCardHandler}>Add New Card</Button>
          <Button onClick={addColumnHandler}>Add New Column</Button>
        </div>
      </header>
      <KanbanBoard columns={kanbanContent} className="px-10 h-full max-h-full overflow-auto" />
      <CardModal cardId={selectedCard} />
    </div>
  );
};
