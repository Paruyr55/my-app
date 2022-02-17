import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'


const Navbar = ()=>{
    return(
        <nav className={classes['nav']}>
            <div className={classes['item']}>
                <NavLink to="/profile" activeclassname={classes['activeLink']}>Profile</NavLink> 
            </div>
            <div className={classes['item']}>
                <NavLink to="/dialogs">Messages</NavLink> 
            </div>
            <div className={classes['item']}>
                <NavLink to="/news">News</NavLink> 
            </div>
            <div className={classes['item']}>
                <NavLink to="/music">Music</NavLink> 
            </div>
        </nav>
    )
}

export default Navbar;