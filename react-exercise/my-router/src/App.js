import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import { Formik, Field, Form } from 'formik';

import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import SignUp from "./components/SignUp";
import Error404 from "./components/Error404";
import User from "./components/User"
import Validation from './components/Validation';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/signup">SignUp</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/validation">Validation</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/validation" component={Validation}></Route>
          {/* <Route path="/user/:id" component={User}></Route> */}
          <Route path="/" component={Home} exact></Route>
          <Route path="*" component={Error404}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
