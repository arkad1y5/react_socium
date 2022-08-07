import React, { component } from 'react';
import classes from './Nav.module.css';
import { NavLink } from "react-router-dom"
import { IconName, BsFillPersonFill, BsMessenger, BsFillPersonLinesFill, BsBarChartSteps, BsGear } from "react-icons/bs";



const NavBar = () => {
    return (
        <nav className={classes.nav_content}>
            <div className={classes.item} >
                <NavLink to='/profile'
                    style={({ isActive }) => ({
                        color: isActive ? 'rgb(132 204 22)' : '#000',
                    })} >
                    <div className={classes.icon_text}>
                        <BsFillPersonFill className={classes.icon_style} />
                        Профіль
                    </div>
                </NavLink>
            </div>
            <div className={classes.item} >
                <NavLink to='/dialogs'
                    style={({ isActive }) => ({
                        color: isActive ? 'rgb(132 204 22)' : '#000',
                    })} >
                    <div className={classes.icon_text}>
                        <BsMessenger className={classes.icon_style} />
                        Повідомлення
                    </div>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/'
                    style={({ isActive }) => ({
                        color: isActive ? 'rgb(132 204 22)' : '#000',
                    })} >
                    <div className={classes.icon_text}>
                        <BsFillPersonLinesFill className={classes.icon_style} />
                        Друзі
                    </div>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/'
                    style={({ isActive }) => ({
                        color: isActive ? 'rgb(132 204 22)' : '#000',
                    })} >
                    <div className={classes.icon_text}>
                        <BsBarChartSteps className={classes.icon_style} />
                        Новини
                    </div>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/'
                    style={({ isActive }) => ({
                        color: isActive ? 'rgb(132 204 22)' : '#000',
                    })} >
                    <div className={classes.icon_text}>
                        <BsGear className={classes.icon_style} />
                        Налаштування
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar;