import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Home from "./components/Home.jsx";
import Project from "./components/Project.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Client from "./components/Client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Project />
    <Skills />
    <About />
    <Client />
    <Contact />
    <Footer />
  </React.StrictMode>
);
