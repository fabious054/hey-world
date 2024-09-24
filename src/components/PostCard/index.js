import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import Button from "components/Button";

const PostCard = ({ post }) => {
    return (
       <Link to={`/post/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.cap} src={`/assets/posts/${post.id}/capa.png`}/>
                <h2 className={styles.title}>{post.titulo}</h2>
                <Button>Open</Button>
            </div>
        </Link>
    )
};

export default PostCard;