import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useLocation, useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector, asyncActions, appActions } from '@/store';
import { Button, CardModal, KanbanBoard, Modal } from '@/components';
import { useUI } from '@/context';

const KanbanPage = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { addErrorToast, addInfoToast, addWarningToast } = useUI();
  const { currentBoard, selectedCard, cards, columns, error, info, isLoading } = useAppSelector(
    (state) => state.demoBoard,
  );
  const prevBoardValue = useDeferredValue(currentBoard);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!params.id) {
      return navigate('/404');
    }

    dispatch(asyncActions.getBoard(params.id));
  }, []);

  useEffect(() => {
    if (!searchParams.has('task') || !cards.length) {
      return;
    }

    const taskId = searchParams.get('task');

    if (!cards.find((card) => card.id === taskId)) {
      return navigate('/404');
    }

    dispatch(appActions.setSelectedCard(taskId));
  }, [searchParams, cards]);

  useEffect(() => {
    if (selectedCard || !searchParams.has('task')) {
      return;
    }

    searchParams.delete('task');

    setSearchParams(searchParams);
  }, [selectedCard]);

  useEffect(() => {
    if (!currentBoard && !isLoading) {
      return navigate('/404');
    }

    if (currentBoard !== prevBoardValue && currentBoard) {
      dispatch(asyncActions.getCards(currentBoard.id));
      dispatch(asyncActions.getColumns(currentBoard.id));
    }
  }, [currentBoard]);

  useEffect(() => {
    if (error) {
      return addErrorToast(error);
    }

    if (info) {
      return addInfoToast(info);
    }
  }, [error, info]);

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

export default KanbanPage;
