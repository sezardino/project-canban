import { Spinner } from '@/components';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

export const AppRouter = () => {
  const elements = useRoutes(routes);

  const loadingIndicator = (
    <div className="h-screen flex items-center justify-center gap-8">
      <Spinner size="md" />
      <Spinner size="xl" type="grow" />
      <Spinner size="md" />
    </div>
  );

  return <Suspense fallback={loadingIndicator}>{elements}</Suspense>;
};
