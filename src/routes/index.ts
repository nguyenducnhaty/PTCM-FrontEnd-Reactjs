import { ComponentType, lazy, ReactElement, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Constants
import { ROUTES } from '@/constants';

// Layouts
import { MainLayout } from '@/layouts';

const Login = lazy(() => import('@/pages/Login'));
const Dashboard = lazy(() => import('@/pages/PlantingDiary'));
const TreeScreening = lazy(() => import('@/pages/TreeScreening'));
const TissueDevelopment = lazy(() => import('@/pages/TissueDevelopment'));

export const ROUTER = createBrowserRouter([
  {
    path: '',
    children: [
      {
        path: ROUTES.LOGIN,
        Component: Login,
      },
    ],
  },
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: ROUTES.TREE_SCREENING,
        Component: TreeScreening,
      },
      {
        path: ROUTES.TISSUE_DEVELOPMENT,
        Component: TissueDevelopment,
      },
    ],
  },
]);
