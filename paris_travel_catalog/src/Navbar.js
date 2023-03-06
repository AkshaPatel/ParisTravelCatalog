import './Navbar.css';

import About from './Components/About';
import Activities from './Components/Activities';
import Attractions from './Components/Attractions';
import Cuisine from './Components/Cuisine';
import InvalidURL from './Components/InvalidURL';

import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

const linkStyle = {textDecoration: "none", color: "white"};
function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link style={linkStyle} to='/'>Home</Link>
          </li>
          <li>
            <Link style={linkStyle} to='activities'>Activities</Link>
          </li>
          <li>
            <Link style={linkStyle} to='attractions'>Attractions</Link>
          </li>
          <li>
            <Link style={linkStyle} to='cuisine'>Cuisine</Link>
          </li>
        </ul>
      </nav>

      <Outlet/>
    </>    
  );
}

export default function Navbar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<About/>}/>
                    <Route path="activities" element={<Activities/>}/>
                    <Route path="attractions" element={<Attractions/>}/>
                    <Route path="cuisine" element={<Cuisine/>}/>
                    <Route path="*" element={<InvalidURL/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}