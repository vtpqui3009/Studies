import React from "react";
import PostItem from "../PostItem";
import HtmlParser from "react-html-parser";
const LatestPostLayout = (props) => {
    return (
        <ul className="post-list">
            {props.latestPosts.map((post) => {
                return (
                    <PostItem
                        key={post.id}
                        id={post.id}
                        category={post.category}
                        image={post.image}
                        title={HtmlParser(post.title)}
                        author={HtmlParser(post.author)}
                        createdAt={post.createdAt}
                    />
                );
            })}
        </ul>
    );
};
export default LatestPostLayout;
