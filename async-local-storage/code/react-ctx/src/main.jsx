import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CounterContextProvider } from "./context/index.jsx";
import App from "./App.jsx";
import "./style.css"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </StrictMode>
);
