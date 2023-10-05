import { lazy } from "react";

// Import your route components using lazy loading
const Home = lazy(() => import("./views/home"));
const AgentSignIn =lazy(()=>import(""))
const FindAgent =lazy(()=>import("./views/findAgent"))
const Result =lazy(()=>import("./views/resultPage"))

export const route = [
  {
    path: "/",
    element: <Home />,
    private: true,
  },
  {
    path: "/find-agent",
    element: <FindAgent/>,
    private: true,
  },

  {
    path: "/sign-In",
    element: <AgentSignIn />,
    private: false,
  },
  {
    path: "/result",
    element: <Result/>,
    private: false,
  },
];
