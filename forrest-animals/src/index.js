import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import ErrorPage from "./error-page";
import App from "./components/App";
import Three from "./components/Three.jsx";
import Scene from "./components/Scene.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/Scene", element: <Scene />, errorElement: <ErrorPage /> },
    ],
  },
  {
    path: "/Three",
    element: <Three />,
    errorElement: <ErrorPage />,
  },
  {},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
