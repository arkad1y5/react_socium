import React, { component } from 'react';
import h from './Header.module.css'

const Header = () => {
    return (
        <header className={h.header_content}>
            <div className={h.header_w}>
                <div className={h.header_name}>
                    <img src='https://media.istockphoto.com/vectors/cute-happy-funny-avocado-show-muscle-vector-id1247203790?k=20&m=1247203790&s=170667a&w=0&h=j7h3FBYR-YyHJVQ1tAp9z1ortzGv8TkABFuijnsItlo=' />
                    <text >avocado</text>
                </div>
            </div>
        </header>
    )
}

export default Header;