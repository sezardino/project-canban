import { lazy } from 'react';
import { DefaultLayout, DemoLayout } from '@/components/layouts';

import Home from '@/pages/index/Home';
import { RouteObject } from 'react-router-dom';

const NotFound = lazy(() => import('@/pages/index/NotFound'));
const Kanban = lazy(() => import('@/pages/demo/Kanban'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  { path: '/demo', element: <DemoLayout />, children: [{ path: 'kanban', element: <Kanban /> }] },
];
