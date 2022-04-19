import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.App_header}>
            <img className={classes.logo}
                 src='https://www.logodesign.net/images/nature-logo.png'/>
        </header>
    );
}

export default Header;
