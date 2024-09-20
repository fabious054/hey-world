import Banner from "components/Banner";
import styles from "./Home.module.css";
import posts from "json/posts.json";
import Post from "components/Post";

const Home = () => {
  console.log(posts);
  
  return (
    <div>
      <main>
        <Banner />
        <ul className={styles.posts}>
          {posts.map((post) => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Home;