import { Board } from '@/common';
import { Button, Heading, Text, Tooltip, BoardsList } from '@/components';
import { asyncActions, useAppDispatch } from '@/store';

interface BoardsTemplateProps {
  boards: Board[];
}

export const BoardsTemplate: React.FC<BoardsTemplateProps> = ({ boards }) => {
  const dispatch = useAppDispatch();

  const addHandler = () => {
    if (boards.length >= 2) {
      return;
    }

    const label = prompt('Enter board label', '');

    if (!label) {
      return alert('Label is required');
    }

    dispatch(asyncActions.addBoard(label));
  };

  const deleteHandler = (boardId: string) => {
    const isConfirmed = confirm('Are you sure?');

    if (!isConfirmed) {
      return;
    }

    dispatch(asyncActions.deleteBoard(boardId));
  };

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
        <Tooltip isActive={boards.length >= 2} label="You can only create two boards">
          <Button size="lg" color="secondary" disabled={boards.length >= 2} onClick={addHandler}>
            Create new Board
          </Button>
        </Tooltip>
      </header>
      <div className="mt-10">
        {boards.length > 0 ? <BoardsList boards={boards} onDelete={deleteHandler} /> : noBoards}
      </div>
    </div>
  );
};
