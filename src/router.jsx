import { lazy } from "react";

// Import your route components using lazy loading
const Home = lazy(() => import("./views/home"));
const AgentSignIn =lazy(()=>import("./views/authentication/agentSignIn/"))
const AgentSignUp =lazy(()=>import("./views/authentication/agentSignup/agentSignup"))
const FindAgent =lazy(()=>import("./views/findAgent/findAgent"))
const SingleProperty =lazy(()=>import("./views/singleProperty/singleProperty"))
const ListPoperty =lazy(()=>import("./views/listProperty/listProperty"))
const AgentProperty =lazy(()=>import("./views/agentProperty/agentProperty"))
const PriceList =lazy(()=>import("./views/priceList/priceList"))
const AccountInfo =lazy(()=>import("./views/accountInfo/accountInfo"))
const BillingInfo =lazy(()=>import("./views/billingInfo/billingInfo"))
const AgentDashboard =lazy(()=>import("./views/adminAgent/agentDashboard/agentDashboard"))
const ListingInformation =lazy(()=>import("./views/adminAgent/listingInformation"))

export const route = [
  {
    path: "/",
    element: <Home />,
    private: false,
  },
  {
    path: "/find-agent",
    element: <FindAgent/>,
    private: false,
  },

  {
    path: "/single-property-details/:id",
    element: <SingleProperty/>,
    private: false,
  },

  {
    path: "/list-property",
    element: <ListPoperty/>,
    private: false,
  },
  
  {
    path: "/dashboard-home",
    element: <AgentDashboard/>,
    private: true,
  },

  {
    path: "/listing-information",
    element: <ListingInformation/>,
    private: true,
  },

  
  {
    path: "/agent-listing",
    element: <AgentProperty/>,
    private: false,
  },

  {
    path: "/price-list",
    element: <PriceList/>,
    private: false,
  },
  
  {
    path: "/account-info",
    element: <AccountInfo/>,
    private: false,
  },
  
  {
    path: "/billing-info",
    element: <BillingInfo/>,
    private: false
  },

  {
    path: "/sign-in",
    element: <AgentSignIn />,
    private: true,
  },
  
  {
    path: "/sign-up",
    element: <AgentSignUp />,
    private: true,
  },

];
