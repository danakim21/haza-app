import React from "react";
import { HashRouter, Route } from "react-router-dom";
import GetDate from "./components/GetDate";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import "./styles/app.css";

function App() {
  return (
    <HashRouter>
      <h1>Haza</h1>
      <GetDate />
      <div id="mainBody">
        <Navigation />
        <Route path="/" exact={true} component={Home} />
      </div>
    </HashRouter>
  );
}

export default App;
