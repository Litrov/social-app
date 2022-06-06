import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={classes.App_header}>
            <img className={classes.logo}
                 src='https://www.logodesign.net/images/nature-logo.png'/>
            <div className={classes.loginBlock}>
                { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
