import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

import "./styles/index.css";
import QueryProvider from "./query/QueryProvider.jsx";
import { TokenProvider } from "./context/TokenContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </TokenProvider>
  </React.StrictMode>
);
