import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "@tkcrm/ui";

import App from "@/components/App";

import "@/assets/css/style.css";

const rootElement = document.querySelector("#root");
rootElement &&
  createRoot(rootElement).render(
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  );
