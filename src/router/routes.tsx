import { lazy } from 'react';
import { DefaultLayout } from '@/components/layouts';

import Home from '@/pages/index/Home';

const NotFound = lazy(() => import('@/pages/index/NotFound'));

export const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
