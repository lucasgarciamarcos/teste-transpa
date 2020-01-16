import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Cadastro from "./Cadastro/Cadastro";

class Menu extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Contato</Link>
              </li>
              <li>
                <Link to="/users">Cadastro</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Cadastro />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h2>Bem vindo ao React App Example</h2>;
}

function About() {
  return <h2>Disque 190</h2>;
}

export default Menu;