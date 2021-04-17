import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home/Home";
import Players from "./players/Players";
import Recruiters from "./recruiters/Recruiters";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/players" component={Players} />
      <Route exact path="/recruiters" component={Recruiters} />
    </BrowserRouter>
  );
}

export default App;
