import React from 'react'
import {NavLink} from 'react-router-dom'

import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/" exact className="main-link">
                Обрахунок
            </NavLink>
            <NavLink to="/history" className="main-link">
                Історія
            </NavLink>
        </header>
    )
}

export default Header
