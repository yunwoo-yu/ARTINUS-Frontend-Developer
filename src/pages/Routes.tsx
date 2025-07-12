import { lazy } from 'react';
import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router';
import { PageLayout } from './PageLayout';

export const WEB_PATH = {
  home: () => '/',
  detail: (id: string = ':id') => `/products/${id}`,
};

const HomePage = lazy(() => import('./Home/Home'));
const DetailPage = lazy(() => import('./Detail/Detail'));

const routeConfig: RouteObject[] = [
  {
    path: WEB_PATH.home(),
    element: <PageLayout />,
    children: [
      {
        path: WEB_PATH.home(),
        element: <HomePage />,
        index: true,
      },
      {
        path: WEB_PATH.detail(),
        element: <DetailPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routeConfig);

export const Routes = () => <RouterProvider router={router} />;
