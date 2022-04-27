import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('@/pages/index/Home'));
const Pricing = lazy(() => import('@/pages/index/Pricing'));
const Releases = lazy(() => import('@/pages/index/Releases'));
const Login = lazy(() => import('@/pages/index/Login'));
const ComingSoon = lazy(() => import('@/pages/index/ComingSoon'));

const Kanban = lazy(() => import('@/pages/demo/Kanban'));
const Boards = lazy(() => import('@/pages/demo/Boards'));

type RouteData = RouteObject & { label?: string };

export const indexPages: RouteData[] = [
  {
    element: <Home />,
    label: 'Home',
    path: '/',
    index: true,
  },
  {
    element: <Pricing />,
    label: 'Pricing',
    path: '/pricing',
  },
  {
    element: <Releases />,
    label: 'Releases',
    path: '/releases',
  },
  {
    element: <Login />,
    label: 'Login',
    path: '/login',
  },
  {
    element: <ComingSoon />,
    path: '/soon',
  },
];

export const demoPages: RouteData[] = [
  { index: true, label: 'Boards', element: <Boards /> },
  { path: ':id', label: 'Kanban', element: <Kanban /> },
  // { path: ':id', label: 'Kanban', children: [{ index: true, element: <Kanban /> }] },
];
