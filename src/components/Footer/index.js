import styles from "./Footer.module.css";
import {ReactComponent as Copyriter} from "assets/marca_registrada.svg";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Copyriter />
            <p>Feito com ❤ por Fabio </p>
        </footer>
    )
};

export default Footer;