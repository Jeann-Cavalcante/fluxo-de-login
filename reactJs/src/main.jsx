import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <AppRoutes />
    </AuthProvider>
  </React.StrictMode>
);
