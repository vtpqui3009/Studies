import React from "react";
import HtmlParser from "react-html-parser";
import PostItem from "../../PostItem";
const PostBlockSidebarLayout = (props) => {
    return (
        <ul className="post-list">
            {props.postsSidebar.map((post) => {
                return (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        category={post.category}
                        image={post.image}
                        title={HtmlParser(post.title)}
                        author={post.author}
                        createdAt={post.createdAt}
                    />
                );
            })}
        </ul>
    );
};
export default PostBlockSidebarLayout;
