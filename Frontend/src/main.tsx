import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ComponentsWithNavBar from './Components/ComponentsWithNavBar.tsx';
import ErrorPage from './Components/ErrorPage.tsx';
import UserLogin from './User/Views/UserLogin.tsx'
import UserRegister from './User/Views/UserRegister.tsx';
import Home from './Components/Home.tsx';
import Testing from './Components/Testing.tsx';
import ProtectedRoute from './Components/ProtectedRoute.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ComponentsWithNavBar>
        <Home />
      </ComponentsWithNavBar>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <ComponentsWithNavBar>
        <UserLogin />
      </ComponentsWithNavBar>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: (
      <ComponentsWithNavBar>
        <UserRegister />
      </ComponentsWithNavBar>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/testing",
    element: (
      <ComponentsWithNavBar>
        <ProtectedRoute>
          <Testing />
        </ProtectedRoute>
      </ComponentsWithNavBar>
    ),
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)