import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// this project is using Bootstrap for styling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App.jsx";
import {ContextProvider} from "./test/Context.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ContextProvider>
);
