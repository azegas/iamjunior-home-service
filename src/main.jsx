import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './styles/normalize.css';
import './styles/main_style.scss';
import './styles/_variables.scss';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);