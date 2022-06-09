import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <NavLink to="/">
             HRnet
            </NavLink>
            
            <nav>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/employees' className={(nav) => nav.isActive ? "nav-active" : ""}>
                            Employees List
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;