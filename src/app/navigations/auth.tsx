import React from "react";
import PAGE_URL from "../PageURL";
import { IRoute } from "types";

const AuthRoutes: IRoute[] = [
  {
    path: PAGE_URL.Login,
    exact: true,
    component: React.lazy(() => import("views/pages/Login"))
  }
];

export default AuthRoutes;