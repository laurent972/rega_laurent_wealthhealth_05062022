import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <NavLink to="rega_laurent_wealthhealth_05062022/">
             HRnet
            </NavLink>
            
            <nav>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <NavLink to="rega_laurent_wealthhealth_05062022/" className={(nav) => nav.isActive ? "nav-active" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='rega_laurent_wealthhealth_05062022/employees' className={(nav) => nav.isActive ? "nav-active" : ""}>
                            Employees List
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;