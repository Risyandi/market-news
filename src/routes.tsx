import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Detail = lazy(() => import("./pages/Detail"));
const React = lazy(() => import("./pages/React"));

const routes = [
  // if not found redirect to homepage or another page
  {
    path: "*",
    component: Home, // change this element to 404 page for the example
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/react",
    component: React,
  },
];

export default routes;
