import { Link, useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';
import img from 'assets/erro_404.png';
import Button from 'components/Button';

const NotFound = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className={styles.contentContainer}>
                <span className={styles.text404}>404</span>
                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.paragraph}>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>

                <div onClick={() => navigate(-1) } className={styles.buttonContainer}>
                    <Button>Go to Home</Button>
                </div>

                <img className={styles.imageDog} src={img} alt="404" />
            </div>
            <div className={styles.whiteSpace}></div>
        </>
    );
}

export default NotFound;