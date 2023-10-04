import { lazy } from "react";
// Import your route components using lazy loading
const Home = lazy(() => import("./views/home"));
const Login =lazy(()=>import("./views/login"))

export const route = [
  {
    path: "/",
    element: <Home />,
    private: true,
  },
  {
    path: "/login",
    element: <Login />,
    private: false,
  },
];
