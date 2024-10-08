import React from "react";
import classes from './nav.module.css';
import {NavLink} from "react-router-dom";

console.log(classes);

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/profile"> Profile </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs"> Messages </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news"> News </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="music"> Music </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="settings"> Settings </NavLink>
            </div>
        </nav>
    )
}
export default Nav
