import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import ErrorPage from "./error-page";
import App from "./components/App";
import Three from "./components/Three.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Three />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "/CherryPage",
      //   element: <Cherry />,
      //   errorElement: <ErrorPage />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
