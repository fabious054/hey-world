import { Link } from "react-router-dom";
import styles from "./Post.module.css";

const PostCard = ({ post }) => {
    return (
       <Link to={`/post/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.cap} src={`/assets/posts/${post.id}/capa.png`}/>
                <h2 className={styles.title}>{post.titulo}</h2>
                <button className={styles.readButton}>Open</button>
            </div>
        </Link>
    )
};

export default PostCard;