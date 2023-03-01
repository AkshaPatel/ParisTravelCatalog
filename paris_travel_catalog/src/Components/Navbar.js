import React from "react";
import './navbar.css';
import About from "./About";
import Cuisine from "./Cuisines";
import Attractions from "./Attractions";

import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="NavBar">
        <Routes>
          <Route path="/" element={< NavBarLayout/>}>
            <Route path="About" element={< About/>} />
            <Route path="cuisine" element={<Cuisine/>} />
            <Route path="attractions" element={<Attractions/>} />
          </Route>
        </Routes>
      </div>
    )
}

const navstyle = {textDecoration: "none", color: "blue"};
function NavBarLayout() {
  return (
    <header>
             
            <nav>
                <ul>
                    <li><Link style={navstyle} to="/">Paris, France</Link></li> 
                    <li>
                        <Link style={navstyle} to="/about">About</Link>
                    </li>
                    <li>
                        <Link style={navstyle} to="/cuisine">Cuisine</Link>
                    </li>
                    <li>
                        <Link style={navstyle} to="/attractions">Attractions</Link>
                    </li>
                </ul>         
            </nav>
        </header>
  )
}

export default Navbar;