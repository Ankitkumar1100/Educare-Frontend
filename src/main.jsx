import React from "react";
import { createRoot } from "react-dom/client"; // Updated import
import App from "./App";
import "./styles/index.css"; // Ensure correct path

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
