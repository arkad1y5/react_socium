import React, { component } from 'react';
import classes from './Nav.module.css';
import { NavLink } from "react-router-dom"
import { IconName, BsFillPersonFill, BsMessenger, BsFillPersonLinesFill, BsBarChartSteps, BsGear } from "react-icons/bs";

const NavName = (props) => {

    let path = '/' + props.id;

    return (
        <div className={classes.item} >
            <NavLink exact to={path}
                style={({ isActive }) => ({
                    color: isActive ? 'rgb(132 204 22)' : '#000',
                })} >
                <div className={classes.icon_text}>
                    {props.icon}
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

const NavBar = () => {
    return (
        <nav className={classes.nav_content}>
            <NavName name="Профіль" id="profile" icon={<BsFillPersonFill className={classes.icon_style} />} />
            <NavName name="Повідомлення" id="dialogs" icon={<BsMessenger className={classes.icon_style} />} />
            <NavName name="Друзі" id="" icon={<BsFillPersonLinesFill className={classes.icon_style} />} />
            <NavName name="Новини" id="" icon={<BsBarChartSteps className={classes.icon_style} />} />
            <NavName name="Налаштування" id="" icon={<BsGear className={classes.icon_style} />} />
        </nav>
    )
}

export default NavBar;