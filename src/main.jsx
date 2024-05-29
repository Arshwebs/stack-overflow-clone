import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/router/Router";
import { Provider } from "react-redux";
import Store from "./components/redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
