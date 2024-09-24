import styles from './NotFound.module.css';
import img from 'assets/erro_404.png';

const NotFound = () => {
    return (
        <>
            <div className={styles.contentContainer}>
                <span className={styles.text404}>404</span>
                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.paragraph}>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>

                <div className={styles.buttonContainer}>
                    <button className={styles.button}>Back</button>
                </div>

                <img className={styles.imageDog} src={img} alt="404" />
            </div>
            <div className={styles.whiteSpace}></div>
        </>
    );
}

export default NotFound;