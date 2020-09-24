import React, { Component } from 'react';
// import Page from './Page';
import './App.css';
import './Responsive.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import './index.css';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Page />
//       </div>
//     )
//   }
// }

export default class App extends Component {
  render() {
    return (
      <Router>
        <Nav/>
        {/* <div className="navbar"> */}
          {/* <nav className="formatNav">
            <ul>
              <li className="navbarTitle">
                <Link to="/">Home</Link>
              </li>
              <li className="navbarTitle">
                <Link to="/about">About</Link>
              </li>
              <li className="navbarTitle">
                <Link to="/users">Users</Link>
              </li>
              <li className="navbarTitle">
                <Link to="/resume">Resume</Link>
              </li>
              <li className="navbarTitle">
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
          </nav> */}
          <Switch />
            <Route exact path="/about">
              <About />
            </Route> 
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          <Switch />
        {/* </div> */}
      </Router>
    );
  }
}