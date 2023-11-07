import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import ErrorPage from "./error-page";
import Test from "./components/Test";
import Three from "./components/Three.jsx";

import Model1 from "./components/Model1.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Model1",
        element: <Model1 />,
      },
    ],
  },
  {
    path: "/Three",
    element: <Three />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
