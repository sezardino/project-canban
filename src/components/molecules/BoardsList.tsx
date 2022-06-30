import { Link } from 'react-router-dom';
import { Heading, Button } from '@/components';
import { Board } from '@/common';

interface BoardsListProps extends React.HTMLProps<HTMLUListElement> {
  boards: Board[];
  onDelete: (boardId: string) => void;
}

export const BoardsList: React.FC<BoardsListProps> = (props) => {
  return (
    <ul className="flex flex-col border-t border-b">
      {props.boards.map((board) => (
        <li key={board.id} className="py-5 group flex justify-between items-center">
          <Link to={board.id}>
            <Heading type="h3" styledAs="h6">
              {board.label}
            </Heading>
          </Link>
          <Button
            size="sm"
            className="invisible transition opacity-0 group-hover:visible group-hover:opacity-100"
            onClick={() => props.onDelete(board.id)}
          >
            Delete Board
          </Button>
        </li>
      ))}
    </ul>
  );
};
