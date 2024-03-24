import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/style/index.css";
import MainRoute from "./routes/MainRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainRoute />
  </React.StrictMode>
);
