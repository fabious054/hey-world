import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
    return (
        <header>
            <nav className={styles.navigation}>
               <Link to="/" className={styles.link}>Home</Link>
               <Link to="/about" className={styles.link}>About me</Link>
            </nav>
        </header>
    );
  }
  
  export default Menu;