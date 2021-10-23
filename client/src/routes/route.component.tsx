import { RouteProps as RouterProps } from "react-router-dom";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Home from "../pages/home/home";

export type RouteProps = {
  key: number;
  isProtected?: boolean;
  isUnProtected?: boolean;
  redirectUrl?: string;
} & RouterProps;

export const BaseRoutes: RouteProps[] = [
  {
    key: 1,
    path: "/",
    component: Home,
    isProtected: true,
    exact: true,
  },
  {
    key: 2,
    path: "/login",
    component: Login,
    isUnProtected: true,
    exact: true,
  },

  {
    key: 3,
    path: "/register",
    component: Register,
    isUnProtected: true,
    exact: true,
  },
];
