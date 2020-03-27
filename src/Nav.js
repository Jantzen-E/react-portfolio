import React, { Component } from 'react';
import './Responsive.css';
import { Link } from 'react-router-dom';
// import About from './About';

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
                    <li >
                      <Link to="/" className="navbarLinks">Home</Link>  
                    </li>
                    <li >
                        <Link to="/about" className="navbarLinks">About</Link>  
                    </li>
                    <li >
                        <Link to="/resume" className="navbarLinks">Resume</Link>  
                    </li>
                </ul>
            </div>
        )
    }
}