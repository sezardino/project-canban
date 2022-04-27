import { Link, Outlet } from 'react-router-dom';
import { ToastsWrapper } from '../organisms/ToastsWrapper/ToastsWrapper';

import { ReactComponent as Logo } from '@/assets/logo.svg';
import { Button } from '@/components';
import { indexPages } from '@/router/pages';

export const DefaultLayout: React.FC = () => {
  return (
    <>
      <header className="py-5 shadow-2xl">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <nav>
            <ul className="flex items-center">
              {indexPages.map(({ path, label }) => (
                <>
                  {!label ? null : (
                    <li key={path}>
                      <Button to={path} isLink hasPadding color="dark">
                        {label}
                      </Button>
                    </li>
                  )}
                </>
              ))}
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
