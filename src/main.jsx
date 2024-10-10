import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Courses from "./pages/Courses";
import "./styles/index.css";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main App with all sections
  },
  {
    path: "/courses",
    element: <Courses />, // Courses page
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
