import styles from './Banner.module.css';
import coloursCircle from 'assets/circulo_colorido.png';
import myPhoto from 'assets/minha_foto.png';

const Banner = () => {
    return (
        <div className={styles.banner}>
           <div className={styles.apresentacao}>
                <h1 className={styles.title}>{`< Hello, World />`}</h1>
                <p className={styles.paragraph}>Sou desenvolvedor web com mais de 3 anos de experiência, tendo atuado em diversos projetos utilizando tecnologias como React.js, HTML, CSS, JavaScript, Python, Node.js e PHP, entre outras. Sou apaixonado por tecnologia e sempre busco me atualizar sobre as últimas tendências do setor. Além disso, sou uma pessoa proativa, animada e com um grande espírito de equipe, acreditando que a colaboração é essencial para alcançar resultados de sucesso.</p>
           </div>
          
           <div className={styles.images}>
            <img className={styles.coloursCircle} src={coloursCircle} />
            <img className={styles.myphoto} src="https://github.com/fabious054.png" alt='My Photo' />
           </div>
        </div>

    );
};

export default Banner;