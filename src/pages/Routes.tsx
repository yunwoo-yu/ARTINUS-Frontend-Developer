import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router";
import { Home } from "./Home/Home";
import { Detail } from "./Detail/Detail";

const webPath = {
  home: () => "/",
  detail: () => "/detail/:id",
};

const routeConfig: RouteObject[] = [
  {
    path: webPath.home(),
    element: <Home />,
  },
  {
    path: webPath.detail(),
    element: <Detail />,
  },
];

const router = createBrowserRouter(routeConfig);

export const Routes = () => <RouterProvider router={router} />;
