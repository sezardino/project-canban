import { Board, ToastTypes } from '@/common';
import { Button, Heading, Spinner, Text, ToastsWrapper, Tooltip } from '@/components';
import { useUI } from '@/context';
import { asyncActions, useAppDispatch, useAppSelector } from '@/store';
import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

const Boards = () => {
  const { boards, error, isLoading, info } = useAppSelector((state) => state.demoBoards);
  const dispatch = useAppDispatch();
  const { addToast } = useUI();

  useEffect(() => {
    dispatch(asyncActions.getBoards());
  }, []);

  useEffect(() => {
    if (error) {
      addToast({
        message: error,
        type: ToastTypes.ERROR,
      });
    }

    if (info) {
      addToast({
        message: info,
        type: ToastTypes.INFO,
      });
    }
  }, [error, info]);

  const addBoardHandler = () => {
    const label = prompt('Enter board label', '');

    if (!label) {
      return alert('Label is required');
    }

    dispatch(asyncActions.addBoard(label));
  };

  const deleteHandler = (board: Board) => {
    const isConfirmed = confirm('Are you sure?');

    if (!isConfirmed) {
      return;
    }

    dispatch(asyncActions.deleteBoard(board.id));
  };

  const canCreateNewBoard = useMemo(() => {
    return boards.length >= 2;
  }, [boards.length]);

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner type="circle" size="xl" color="secondary" />
      </div>
    );
  }

  const boardsList = (
    <ul className="flex flex-col border-t border-b">
      {boards.map((board) => (
        <li key={board.id} className="py-5 group flex justify-between items-center">
          <Link to={board.id}>
            <Heading type="h3" styledAs="h6">
              {board.label}
            </Heading>
          </Link>
          <Button
            size="sm"
            className="invisible transition opacity-0 group-hover:visible group-hover:opacity-100"
            onClick={() => deleteHandler(board)}
          >
            Delete Board
          </Button>
        </li>
      ))}
    </ul>
  );

  const noBoards = (
    <Heading type="h2" styledAs="h4">
      You don&apos;t have any boards yet
    </Heading>
  );

  return (
    <div className="container mx-auto">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Heading type="h1" styledAs="h2">
            Boards
          </Heading>
          <Text size="xl">You can only create two demo boards</Text>
        </div>
        <Tooltip isActive={canCreateNewBoard} label="You can only create two boards">
          <Button size="lg" color="secondary" disabled={canCreateNewBoard} onClick={addBoardHandler}>
            Create new Board
          </Button>
        </Tooltip>
      </header>
      <div className="mt-10">{boards.length > 0 ? boardsList : noBoards}</div>
      <ToastsWrapper className="fixed top-10 left-full w-full max-w-xs translate-x-[-110%]" />
    </div>
  );
};

export default Boards;
