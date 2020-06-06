import React from 'react'
import {NavLink} from 'react-router-dom'

import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/" exact className="main-link">
                Calculator
            </NavLink>
            <NavLink to="/history" className="main-link">
                History
            </NavLink>
        </header>
    )
}

export default Header
