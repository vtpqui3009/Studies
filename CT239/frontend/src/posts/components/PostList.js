import React from "react";
import PostItem from "./PostItem";
import HtmlParser from "react-html-parser";
const PostList = (props) => {
    const publicURL = "http://localhost:5000/images/";
    return (
        <ul className="post-list">
            {props.posts.map((post) => {
                return (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        category={post.category}
                        image={publicURL + post.image}
                        title={HtmlParser(post.title)}
                        desc={HtmlParser(post.description)}
                        author={post.author}
                        date={post.date}
                    />
                );
            })}
        </ul>
    );
};
export default PostList;
