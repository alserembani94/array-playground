import { Router, RootRoute, Route } from "@tanstack/react-router";
import Root from "../layouts/Root";
import { Home } from "../pages/Home";
import {
  Answer1,
  Answer2,
  Answer3,
  Answer4,
  Answer5,
  Answer6,
  Answer7,
  Answer8,
  Answer9,
} from "../answers";
import {
  Exercise1,
  Exercise2,
  Exercise3,
  Exercise4,
  Exercise5,
  Exercise6,
  Exercise7,
  Exercise8,
  Exercise9,
} from "../pages";

export const routeList = [
  {
    label: "Home",
    path: "/",
    component: Home,
  },
  {
    label: "Exercise 1 (for)",
    path: "/exercise-1",
    component: Exercise1,
  },
  {
    label: "Exercise 2 (for...of)",
    path: "/exercise-2",
    component: Exercise2,
  },
  {
    label: "Exercise 3 (forEach)",
    path: "/exercise-3",
    component: Exercise3,
  },
  {
    label: "Exercise 4 (map)",
    path: "/exercise-4",
    component: Exercise4,
  },
  {
    label: "Exercise 5 (filter)",
    path: "/exercise-5",
    component: Exercise5,
  },
  {
    label: "Exercise 6 (find)",
    path: "/exercise-6",
    component: Exercise6,
  },
  {
    label: "Exercise 7 (sort)",
    path: "/exercise-7",
    component: Exercise7,
  },
  {
    label: "Exercise 8 (some)",
    path: "/exercise-8",
    component: Exercise8,
  },
  {
    label: "Exercise 9 (every)",
    path: "/exercise-9",
    component: Exercise9,
  },
];

export const answerRouteList = [
  {
    label: "Answer 1",
    path: "/answer-1",
    component: Answer1,
  },
  {
    label: "Answer 2",
    path: "/answer-2",
    component: Answer2,
  },
  {
    label: "Answer 3",
    path: "/answer-3",
    component: Answer3,
  },
  {
    label: "Answer 4",
    path: "/answer-4",
    component: Answer4,
  },
  {
    label: "Answer 5",
    path: "/answer-5",
    component: Answer5,
  },
  {
    label: "Answer 6",
    path: "/answer-6",
    component: Answer6,
  },
  {
    label: "Answer 7",
    path: "/answer-7",
    component: Answer7,
  },
  {
    label: "Answer 8",
    path: "/answer-8",
    component: Answer8,
  },
  {
    label: "Answer 9",
    path: "/answer-9",
    component: Answer9,
  },
];

// Create root route (main layout)
// This root route can be nested
const rootRoute = new RootRoute({ component: Root });

// For each route, generate route object
const createRoute = ({ path, component }) =>
  new Route({ path, component, getParentRoute: () => rootRoute });
const routes = routeList.map((routeInfo) => createRoute(routeInfo));
const answerRoutes = answerRouteList.map((routeInfo) => createRoute(routeInfo));

// Add those generated routes under the root route
const routeTree = rootRoute.addChildren([...routes, ...answerRoutes]);
const router = new Router({ routeTree });

export default router;
