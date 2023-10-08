import { lazy } from "react";

// Import your route components using lazy loading
const Home = lazy(() => import("./views/home"));
const AgentSignIn =lazy(()=>import(""))
const FindAgent =lazy(()=>import("./views/findAgent/findAgent"))
const Result =lazy(()=>import("./views/resultPage"))
const SingleProperty =lazy(()=>import("./views/singleProperty/singleProperty"))
const ListPoperty =lazy(()=>import("./views/listProperty/listProperty"))
const RealEstate =lazy(()=>import("./views/realEstate/realEstate"))
const AgentProperty =lazy(()=>import("./views/agentProperty/agentProperty"))
const PriceList =lazy(()=>import("./views/priceList/priceList"))
const AccountInfo =lazy(()=>import("./views/accountInfo/accountInfo"))
const BillingInfo =lazy(()=>import("./views/billingInfo/billingInfo"))

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
    path: "/single-property",
    element: <SingleProperty/>,
    private: true,
  },

  {
    path: "/list-property",
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
    path: "/price-list",
    element: <PriceList/>,
    private: true,
  },
  
  {
    path: "/account-info",
    element: <AccountInfo/>,
    private: true,
  },
  
  {
    path: "/billing-info",
    element: <BillingInfo/>,
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
