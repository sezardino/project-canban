import { Link, Outlet } from 'react-router-dom';
import { ToastsWrapper } from '@/components';

import { ReactComponent as Logo } from '@/assets/logo.svg';
import { Button } from '@/components';
import { indexPages } from '@/router/pages';
import { useMemo } from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}

export const DefaultLayout: React.FC<LayoutProps> = (props) => {
  const links = useMemo(() => {
    return indexPages.filter((page) => page.label).map(({ label, path }) => ({ label, path }));
  }, [indexPages]);

  return (
    <>
      <header className="py-5 shadow-2xl">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <nav>
            <ul className="flex items-center gap-4">
              {links.map((link) => (
                <li key={link.path}>
                  <Button to={link.path} variant="text" color="dark">
                    {link.label}
                  </Button>
                </li>
              ))}
              <li>
                <Button to={'/demo'} color="dark">
                  Demo
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        {props.children ? props.children : <Outlet />}

        <ToastsWrapper className="fixed top-10 left-full w-full max-w-xs translate-x-[-110%]" />
      </main>
    </>
  );
};
