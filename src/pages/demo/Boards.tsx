import { useEffect } from 'react';
import { asyncActions, useAppDispatch, useAppSelector } from '@/store';
import { Heading, Spinner, BoardsTemplate } from '@/components';
import { useUI } from '@/context';

const Boards = () => {
  const { boards, error, isLoading, info } = useAppSelector((state) => state.demoBoards);
  const dispatch = useAppDispatch();
  const { addInfoToast, addErrorToast } = useUI();

  useEffect(() => {
    dispatch(asyncActions.getBoards());
  }, []);

  useEffect(() => {
    if (error) {
      addErrorToast(error);
    }
  }, [error]);

  useEffect(() => {
    if (info) {
      addInfoToast(info);
    }
  }, [info]);

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

  return <BoardsTemplate boards={boards} />;
};

export default Boards;
