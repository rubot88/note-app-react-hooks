import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">Note App</NavLink>
        <ul className="navbar-nav">
            <li className="nav-item ">
                <NavLink
                    className="nav-link"
                    exact
                    to="/">
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to="/about">
                    About
                </NavLink>
            </li>
        </ul>
    </nav>
)