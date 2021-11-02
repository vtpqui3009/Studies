import React from "react";
import PostItem from "../../PostItem";
import ReactHtmlParser from "react-html-parser";
import "./PostBlockItem.css";
const PostBLockLayout = (props) => {
    return (
        <ul className="post-block__list-category">
            {props.postBLockList.map((post) => {
                return (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        category={post.category}
                        image={post.image}
                        title={ReactHtmlParser(post.title)}
                        author={post.author}
                        createdAt={post.createdAt}
                        desc={ReactHtmlParser(post.description)}
                    />
                );
            })}
        </ul>
    );
};
export default PostBLockLayout;
