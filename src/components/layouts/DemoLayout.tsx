import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from '@/assets/logo-full.svg';

export const DemoLayout: React.FC = () => {
  return (
    <div className="h-screen overflow-hidden">
      <header className="py-3 shadow-xl w-full fixed top-0 left-0">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="" className="flex">
            <Logo width="75" height="65" />
          </Link>
        </div>
      </header>
      <main className="mt-[89px]" style={{ height: 'calc(100vh - 89px)' }}>
        <Outlet />
      </main>
    </div>
  );
};
