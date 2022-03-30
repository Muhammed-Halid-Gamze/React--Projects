import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Error404 from "./components/Error404";
import User from "./components/User"

function App() {
  return (
    <Router>
      <div>
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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/users" component={Users}></Route>
          {/* <Route path="/user/:id" component={User}></Route> */}
          <Route path="/" component={Home} exact></Route>
          <Route path="*" component={Error404}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
