import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
// Constants
import { ROUTES } from '@/constants';
// Layouts

// HOCs
import { withLazy } from '@/hocs';
import { MainLayout } from '@/layouts';

// Pages
const Login = lazy(() => import('@/pages/Login'));
const Dashboard = lazy(() => import('@/pages/Home'));
const TreeScreening = lazy(() => import('@/pages/TreeScreening'));
const TissueDevelopment = lazy(() => import('@/pages/TissueDevelopment'));

export const ROUTER = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: ROUTES.TreeScreening,
        Component: TreeScreening,
      },
      {
        path: ROUTES.TissueDevelopment,
        Component: TissueDevelopment,
      },
    ],
  },
  {
    path: `/${ROUTES.LOGIN}`,
    Component: withLazy(Login),
  },
]);
