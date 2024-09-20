import styles from "./Post.module.css";

const Post = ({ post }) => {
    return (
        <div className={styles.post}>
            <img className={styles.cap} src={`/assets/posts/${post.id}/capa.png`}/>

            <h2 className={styles.title}>{post.titulo}</h2>
            <button className={styles.readButton}>Open</button>
        </div>
    )
};

export default Post;