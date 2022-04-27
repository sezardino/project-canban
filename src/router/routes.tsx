import { lazy } from 'react';
import { DefaultLayout, DemoLayout } from '@/components/layouts';

import { RouteObject } from 'react-router-dom';
import { indexPages, demoPages } from './pages';

const NotFound = lazy(() => import('@/pages/index/NotFound'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [...indexPages, { path: '*', element: <NotFound /> }],
  },
  {
    path: '/demo',
    element: <DemoLayout />,
    children: demoPages,
  },
];
