import { lazy } from 'react';
import { DefaultLayout } from '@/components/layouts';

import Home from '@/pages/index/Home';
import { Outlet, RouteObject } from 'react-router-dom';

const NotFound = lazy(() => import('@/pages/index/NotFound'));
const Board = lazy(() => import('@/pages/demo/Board'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  { path: '/demo', element: <Outlet />, children: [{ path: 'board', element: <Board /> }] },
];
