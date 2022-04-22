import React from "react";
import { Page, Route } from "@tkcrm/ui";

const Home = React.lazy(() => import("./components/Home"));
const InternalPage = React.lazy(() => import("./components/Page"));

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
    element: <InternalPage />,
  },
  {
    path: "*",
    title: "not_found",
    element: (
      <Page.Error
        code={404}
        title="Page not found"
        description="Please check the URL in the address bar and try again."
        homeText="Home page"
      />
    ),
  },
];
