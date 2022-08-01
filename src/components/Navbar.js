import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import  Categories  from "./Categories"
import  Team  from "./Team"
import  Buy  from "./Buy"
import  Shop  from "./Shoping"
import  Aboutus  from "./Aboutus"


 const NavBar = () =>{
    return(
            <Router>
                <div className="max-width">
                    <nav>
                        <div className="nav-logo">
                            <img src='img/first.png' />
                        </div>
                        <ul className="nav-item">
                            <li><NavLink to='/' activeclassname='selected'>Shop</NavLink></li>
                            <li><NavLink to='/aboutus' activeclassname='selected'>About us</NavLink></li>
                            <li><NavLink to='/team' activeclassname='selected'>Our team</NavLink></li>
                            <li><NavLink to='/buy' activeclassname='selected'>Buyer's guides</NavLink></li>
                            <li><NavLink to='/categories' activeclassname='selected'>Categories</NavLink></li>
                        </ul>
                            <div className="first-btn">
                                <button className="first"><a href="">Buy template</a></button>
                                <button className="second"><a href="">Cart</a></button>
                            </div>
                    </nav>
                </div>

                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/buy" element={<Buy />} />
                    <Route path="/categories" element={<Categories />} />
                </Routes>
            </Router>
            
           
    )
}
export default NavBar

