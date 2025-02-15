import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { HelmetHeader } from "@/components/Optimizing/Helmet";
import App from "@/App.jsx";
import "@/globals.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetHeader />
      <App />
    </BrowserRouter>
  </StrictMode>
);
