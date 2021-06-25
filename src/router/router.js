import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Album from '../components/navbar'
import Home from "../components/home/home"
import Footer from "../components/footer/footer"
export default function Routers() {
  return (
    <Router>
          <Album/>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}
