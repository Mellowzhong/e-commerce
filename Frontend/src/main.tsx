import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from './Components/NavBar.tsx';
import ErrorPage from './Components/ErrorPage.tsx';
import UserLogin from './User/Views/UserLogin.tsx'
import UserRegister from './User/Views/UserRegister.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <App />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <>
        <NavBar />
        <UserLogin />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: (
      <>
        <NavBar />
        <UserRegister />
      </>
    ),
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)