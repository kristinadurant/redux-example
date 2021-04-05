import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/player'>Player</NavLink>
        </header>
    )
}

export default Header
