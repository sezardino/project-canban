import { useUI } from '@/context';
import { Outlet } from 'react-router-dom';
import { ToastsWrapper } from '../organisms/ToastsWrapper/ToastsWrapper';

export const DefaultLayout: React.FC = () => {
  const { addToast } = useUI();

  return (
    <main className="py-20 container mx-auto grid content-start gap-8">
      <button onClick={() => addToast({ message: 'lol', type: 'error' })}>add toast</button>
      <Outlet />
      <ToastsWrapper className="fixed top-10 left-full w-full max-w-xs translate-x-[-110%]" />
    </main>
  );
};
