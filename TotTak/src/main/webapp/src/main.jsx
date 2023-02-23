import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BuyTokens from './BuyTokens';
import UserTokens from './UserTokens';
import Success from './Success';
import Dashboard from './Dashboard';
import HomeScreen from './HomeScreen';
import PrivateCustomerRegistration from './PrivateCustomerRegistration';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/user-tokens" replace />,
  },
  {
    path: "/user-tokens",
    element: <UserTokens />,
  },
  {
    path: "/buy-tokens/*",
    element: <BuyTokens />
  },
  {
    path: "/success",
    element: <Success />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/homeScreen",
    element: <HomeScreen/>
  },
  {
    path: "/privateCustomerRegistration",
    element: <PrivateCustomerRegistration/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
