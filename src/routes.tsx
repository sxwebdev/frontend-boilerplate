import React from "react";
import { RouteObject } from "react-router";

type Route = RouteObject & {
  title?: string;
  end?: boolean;
  to?: string;
  replace?: boolean;
  hide_in_menu?: boolean;
};

const Home = React.lazy(() => import("./components/Home"));
const Page = React.lazy(() => import("./components/Page"));
const NotFound = React.lazy(() => import("./components/NotFound"));

export const routes: Route[] = [
  {
    path: "/",
    title: "home",
    end: true,
    element: <Home />,
  },
  {
    path: "/page",
    title: "page",
    element: <Page />,
  },
  {
    path: "*",
    title: "not_found",
    element: <NotFound />,
  },
];
