import React, { component } from 'react';
import h from './Header.module.css'

const Header = () => {
    return (
        <header className={h.header_content}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png' />
        </header>
    )
}

export default Header;