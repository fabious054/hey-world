import styles from './MenuLink.module.css';
import { Link, useActionData, useLocation } from 'react-router-dom';

const MenuLink = ({ to, children }) => {
    const local = useLocation();
    return (
        <Link 
            to={to} 
            className={`${styles.link} ${ local.pathname === to && styles.active}`}>
            {children}
        </Link>
    )
}

export default MenuLink;
