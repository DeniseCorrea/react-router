import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav>
        <ul>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/our-history" activeClassName="active">History</NavLink></li>
        </ul>
    </nav>
);

export default Navbar;