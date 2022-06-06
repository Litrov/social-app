import classes from "./Nav.module.css";
import {NavLink} from "react-router-dom";


function Nav() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="Content">Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Dialogs">Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Users">Users</NavLink>
            </div>
            <div className={classes.item}>News</div>
            <div className={classes.item}>Music</div>
        </nav>
    );
}


export default Nav;
