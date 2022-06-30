import { useDeferredValue, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector, asyncActions, appActions } from '@/store';
import { Heading, KanbanTemplate, Spinner } from '@/components';
import { useUI } from '@/context';

const KanbanPage = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { addErrorToast, addInfoToast } = useUI();
  const { currentBoard, selectedCard, cards, error, info, isLoading } = useAppSelector((state) => state.demoBoard);
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

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner type="circle" size="xl" color="secondary" />
      </div>
    );
  }

  if (error) {
    <Heading type="h2" styledAs="h4">
      Something went wrong
    </Heading>;
  }

  return <KanbanTemplate />;
};

export default KanbanPage;
