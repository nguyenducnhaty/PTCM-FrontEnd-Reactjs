import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
// Constants
import { ROUTES } from '@/constants';
// Layouts

// HOCs
import { withLazy } from '@/hocs';

// Pages
const Login = lazy(() => import('@/pages/Login'));
const Dashboard = lazy(() => import('@/pages/Home'));

export const ROUTER = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    // Component: withCheckLogin(MainLayout),
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      //   {
      //     path: ROUTES.HISTORY,
      //     Component: History,
      //   },
      //   {
      //     path: ROUTES.MY_WALLET,
      //     Component: MyWallet,
      //   },
      //   {
      //     path: ROUTES.SETTING,
      //     Component: Setting,
      //   },
      //   {
      //     path: ROUTES.TRANSACTION,
      //     Component: Transaction,
      //   },
      //   {
      //     path: ROUTES.USER,
      //     Component: User,
      //   },
      //   {
      //     path: ROUTES.NOT_FOUND,
      //     Component: NotFound,
      // },
    ],
  },
  {
    path: `/${ROUTES.LOGIN}`,
    Component: withLazy(Login),
  },
]);
