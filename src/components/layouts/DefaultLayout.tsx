import { Outlet } from 'react-router-dom';
import { ToastsWrapper } from '../organisms/ToastsWrapper/ToastsWrapper';

export const DefaultLayout: React.FC = () => {
  return (
    <main className="py-20 container mx-auto grid content-start gap-8">
      <Outlet />
      <ToastsWrapper className="fixed top-10 left-full w-full max-w-xs translate-x-[-110%]" />
    </main>
  );
};
