import "./Post.css";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import React from "react";
import ReactMarkdown from "react-markdown";

const Post = () => {

    const params = useParams();
    const post = posts.find((post) => post.id === parseInt(params.id));

    if (!post) {
        return <h1>Post não encontrado</h1>;
       
    }else{
        return (
            <PostModel photoCap={`/assets/posts/${post.id}/capa.png`} title={post.titulo}>
                <div className="post-markdown-container">
                    <ReactMarkdown>{post.texto}</ReactMarkdown>
                </div>
            </PostModel>
        );
    }
};

export default Post;