import React from "react";
import classes from './header.module.css';
import NameHeader from "./nameHeader";
const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <img src='https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logo-photo-12.png'/>
               <NameHeader />
            </div>
        </header>
    )
}
export default Header;