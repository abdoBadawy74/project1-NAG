import React from "react";
import ReactDOM from "react-dom/client";
import "./Style.css";
import NavBar from "./Components/NavBar";
import Content from "./Content";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div className="contianer">
    <NavBar />
    <Content />
</div>);
