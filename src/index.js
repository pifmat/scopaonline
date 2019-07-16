import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import "./styles/index.scss";
import App from "./App";
import Game from "./components/Game";

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/game/host/:id" component={Game} />
        <Route path="/game/guest/:id" component={Game} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
