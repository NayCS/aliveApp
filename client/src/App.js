import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blood from "./pages/Blood";
import Detail from "./pages/Detail";
//import Login from "../pages/login";
import NoCalculationMade from "./pages/NoCalculationMade";

//import logo from './logo.svg';
//import './App.css';
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Blood} />
          <Route exact path="/bloods" component={Blood} />
          <Route exact path="/bloods/:id" component={Detail} />
          <Route component={NoCalculationMade} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
