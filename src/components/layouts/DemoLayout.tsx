import { Link, Outlet } from 'react-router-dom';
import { ToastsWrapper } from '../organisms/ToastsWrapper/ToastsWrapper';

import { ReactComponent as Logo } from '@/assets/logo-full.svg';
import { useEffect, useMemo, useRef, useState } from 'react';

export const DemoLayout: React.FC = () => {
  return (
    <div className="h-screen overflow-hidden">
      <header className="py-3 shadow-xl w-full fixed top-0 left-0">
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
      <main className="mt-[89px]" style={{ height: 'calc(100vh - 89px)' }}>
        <Outlet />
        <ToastsWrapper className="fixed top-10 left-full w-full max-w-xs translate-x-[-110%]" />
      </main>
    </div>
  );
};
