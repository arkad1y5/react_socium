import React, { component } from 'react';
import classes from './Nav.module.css';

const NavBar = () => {
    return (
        <nav className={classes.nav_content}>
            <div className={classes.item}>
                <a>Home</a>
            </div>
            <div className={classes.item}>
                <a>Friends</a>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Setings</a>
            </div>
        </nav>
    )
}

export default NavBar;