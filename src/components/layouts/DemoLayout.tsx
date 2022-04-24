import { Link, Outlet } from 'react-router-dom';
import { ToastsWrapper } from '../organisms/ToastsWrapper/ToastsWrapper';

import { ReactComponent as Logo } from '@/assets/logo-full.svg';

export const DemoLayout: React.FC = () => {
  return (
    <>
      <header className="py-8 shadow-xl">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="" className="flex">
            <Logo width="75" height="65" />
          </Link>

          <nav>
            <ul>
              <li>
                <Link to="kanban" className="flex font-semibold">
                  Board
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
        <ToastsWrapper className="fixed top-10 left-full w-full max-w-xs translate-x-[-110%]" />
      </main>
    </>
  );
};
