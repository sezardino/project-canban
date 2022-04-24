import { CardData, Status } from '@/common';
import { cardsArr, statusesArr } from '@/common/mock';
import { KanbanTemplate } from '@/components/pages/Kanban/Kanban';
import { useMemo, useState } from 'react';

const KanbanPage = () => {
  const [statuses, setStatuses] = useState<Status[]>(statusesArr);
  const [cards, setCards] = useState<CardData[]>(cardsArr);

  const addColumn = () => {
    const name = prompt('Enter new board name', '');
    if (!name) {
      return alert('You must enter name');
    }

    if (statuses.find((board) => board.title === name)) {
      return alert('Board with this name already exists');
    }

    const newColumn: Status = {
      id: name.replace(' ', '-').toLowerCase(),
      label: name,
    };

    setStatuses((prevStatuses) => [...prevStatuses, newColumn]);
  };

  const addTask = () => {
    const title = prompt('Enter new board title', '');
    if (!title) {
      return alert('You must enter title');
    }

    const lastTask = cards.pop();

    const newTask: CardData = {
      id: Date.now().toString(),
      title,
      status: 'todo',
      order: lastTask ? lastTask.order + 1 : 1,
    };

    setCards((prevCards) => [...prevCards, newTask]);
  };

  const kanbanContent = useMemo(() => {
    return statuses.map((column) => ({
      ...column,
      items: cards.filter((card) => card.status === column.id).sort((a, b) => a.order - b.order),
    }));
  }, [cards, statuses]);

  const changeStatus = (id: string, status: string) => {
    setCards((prevCards) =>
      prevCards.map((task) => {
        if (task.id === id) {
          return { ...task, status };
        }
        return task;
      }),
    );
  };

  const changeOrder = (id: string, order: number) => {
    setCards((prevCards) =>
      prevCards.map((task) => {
        if (task.id === id) {
          return { ...task, order };
        }
        return task;
      }),
    );
  };

  return <KanbanTemplate columns={kanbanContent} changeOrder={changeOrder} changeStatus={changeStatus} />;
};

export default KanbanPage;
