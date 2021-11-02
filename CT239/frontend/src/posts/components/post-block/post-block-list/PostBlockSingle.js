import React from "react";
import PostItem from "../../PostItem";
// import "./PostBlockItem.css";
const PostBLockSingle = (props) => {
    return (
        <ul className="post-list">
            {props.postSingle.map((post) => {
                return (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        category={post.category}
                        image={post.image}
                        title={post.title}
                        author={post.author}
                        createdAt={post.createdAt}
                        description={post.description}
                    />
                );
            })}
        </ul>
    );
};
export default PostBLockSingle;
