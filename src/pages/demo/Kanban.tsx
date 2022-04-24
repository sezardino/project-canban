import { useEffect, useMemo } from 'react';

import { cardsArr, columnsArr } from '@/common';
import { Button, KanbanBoard } from '@/components';
import { storeActions, useAppDispatch, useAppSelector } from '@/store';

const KanbanPage = () => {
  const { cards, columns } = useAppSelector((state) => state.demoReducer);
  const dispatch = useAppDispatch();
  const {
    demoActions: { setCards, setColumns, addCard, addColumn },
  } = storeActions;

  useEffect(() => {
    dispatch(setCards(cardsArr));
    dispatch(setColumns(columnsArr));
  }, []);

  const addColumnHandler = () => {
    const label = prompt('Enter new board name', '');
    if (!label) {
      return alert('You must enter name');
    }

    if (columns.find((column) => column.label === label)) {
      return alert('Board with this name already exists');
    }

    const id = label.replace(' ', '-').toLowerCase();

    if (columns.find((column) => column.id === id)) {
      return alert('Board with this name(id) already exists');
    }

    dispatch(addColumn({ label, id }));
  };

  const addCardHandler = () => {
    const title = prompt('Enter new board title', '');

    if (!title) {
      return alert('You must enter title');
    }

    dispatch(addCard({ title }));
  };

  const kanbanContent = useMemo(() => {
    return columns.map((column) => ({
      ...column,
      items: cards.filter((card) => card.column === column.id).sort((a, b) => a.order - b.order),
    }));
  }, [cards, columns]);

  return (
    <div className="h-full flex flex-col">
      <header className="flex justify-between py-10 px-10">
        <h1 className="text-4xl">Kanban Board</h1>
        <div className="flex gap-2">
          <Button onClick={addCardHandler}>Add New Task</Button>
          <Button onClick={addColumnHandler}>Add New Column</Button>
        </div>
      </header>
      <KanbanBoard columns={kanbanContent} className="px-10 h-full max-h-full overflow-auto" />
    </div>
  );
};

export default KanbanPage;
