import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./Components/Header";
import "./Style.css";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <App />
    <Footer />
  </div>
);
