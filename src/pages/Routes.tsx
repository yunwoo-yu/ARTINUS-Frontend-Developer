import { createBrowserRouter, RouterProvider, type RouteObject } from 'react-router';
import { Home } from './Home/Home';
import { Detail } from './Detail/Detail';
import { PageLayout } from './PageLayout';

export const WEB_PATH = {
  home: () => '/',
  detail: (id: string = ':id') => `/products/${id}`,
};

const routeConfig: RouteObject[] = [
  {
    path: WEB_PATH.home(),
    element: <PageLayout />,
    children: [
      {
        path: WEB_PATH.home(),
        element: <Home />,
        index: true,
      },
      {
        path: WEB_PATH.detail(),
        element: <Detail />,
      },
    ],
  },
];

const router = createBrowserRouter(routeConfig);

export const Routes = () => <RouterProvider router={router} />;
