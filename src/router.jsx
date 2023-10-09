import { lazy } from "react";

// Import your route components using lazy loading
const Home = lazy(() => import("./views/home"));
const AgentSignIn =lazy(()=>import(""))
const FindAgent =lazy(()=>import("./views/findAgent"))
const Result =lazy(()=>import("./views/resultPage"))
const SingleProperty =lazy(()=>import("./views/singleProperty"))
const ListPoperty =lazy(()=>import("./views/listProperty"))
const RealEstate =lazy(()=>import("./views/realEstate"))
const AgentProperty =lazy(()=>import("./views/agentProperty"))

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
    path: "/single-property-details/:id",
    element: <SingleProperty/>,
    private: true,
  },

  {
    path: "/list-property",
    element: <ListPoperty/>,
    private: true,
  },
  {
    path: "/",
    element: <ListPoperty/>,
    private: true,
  },

  {
    path: "/real-estate",
    element: <RealEstate/>,
    private: true,
  },
  
  {
    path: "/agent-listing",
    element: <AgentProperty/>,
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
