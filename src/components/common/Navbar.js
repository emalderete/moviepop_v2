import React from 'react';
import { NavLink } from 'react-router-dom';
import './Components.css';

const Navbar = () => {
    return (
        <div>
            <ul className="navigation">
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : "inactive"} to="/"><i className="icons fa-solid fa-house-chimney"></i></NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : "inactive"} to="/movies"><i className="icons fa-solid fa-magnifying-glass"></i></NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? "active" : "inactive"} to="/user"><i className="icons fa-solid fa-user"></i></NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;