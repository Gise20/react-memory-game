import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
      </Routes>
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});