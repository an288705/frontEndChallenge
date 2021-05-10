import React from "react";
import Main from "./main/Main";
import Header from "./header/Header";
import {BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
