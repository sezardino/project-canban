import { Outlet } from 'react-router-dom';

export const DefaultLayout: React.FC = () => {
  return (
    <main className="py-20 container mx-auto grid content-start gap-8">
      <Outlet />
    </main>
  );
};
