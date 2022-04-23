import { Outlet } from 'react-router-dom';
import { ToastsWrapper } from '../organisms/ToastsWrapper/ToastsWrapper';

export const DemoLayout: React.FC = () => {
  return (
    <main>
      <Outlet />
      <ToastsWrapper className="fixed top-10 left-full w-full max-w-xs translate-x-[-110%]" />
    </main>
  );
};
