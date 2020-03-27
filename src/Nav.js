import React, { Component } from 'react';
import './Responsive.css';
import { Link } from 'react-router-dom';
import About from './About';

// export default class Nav extends Component {
//     render() {
//         return (
//             <div className="navbar">
//                 <a><button className="navbarTitle">Home</button></a>                
//                  <a><button className="navbarTitle">About Me</button></a>
//                  <a><button className="navbarTitle">Contact Information</button></a>
//                  <a><button className="navbarTitle">Resume</button></a>
//                  <a><button className="navbarTitle">Practice</button></a>
//             </div>
//         )
//     }
// }

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul className='navbar'>
                    <li>
                      <Link to="/">Home</Link>  
                    </li>
                    <li>
                        <Link to="/about">about</Link>  
                    </li>
                    <li>
                        <Link to="/users">users</Link>  
                    </li>
                </ul>
            </div>
        )
    }
}

{/* <ul className="navbarTitle">
                    <li className="linkLi">
                        <Link to="/page1" className="link">page 1</Link>
                    </li>
                    <div/>
                    <li className="linkLi">
                        <Link to="/page2" className="link">page2</Link>
                    </li>
                    <div/>
                    <li className="linkLi">
                        <Link to="/page3" className="link">page 3</Link>
                    </li>
                </ul> */}