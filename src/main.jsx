import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import Aboutus from "./pages/About-US";
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
  {
    path: "/blogs",
    element: <Blog />,
  },
  {
    path: "/aboutUs",
    element: <Aboutus />,
  }
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
