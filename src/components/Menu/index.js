import { Link, useActionData, useLocation } from 'react-router-dom';
import styles from './Menu.module.css';
import MenuLink from '../MenuLink';

const Menu = () => {
    
    return (
        <header>
            <nav className={styles.navigation}>
                <MenuLink to="/" >
                    Home
                </MenuLink>
                <MenuLink to="about">
                    About me
                </MenuLink>
            </nav>
        </header>
    );
  }
  
  export default Menu;