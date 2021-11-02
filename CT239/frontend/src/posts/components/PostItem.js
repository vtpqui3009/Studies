import React from "react";
import { Link } from "react-router-dom";
import PostItemMore from "./layout/PostItemMore";
import PostItemImage from "./layout/PostItemImage";
import HtmlParser from "react-html-parser";
const PostItem = (props) => {
    const publicURL = "http://localhost:5000/";
    return (
        <li className="post-item" key={props.id}>
            <Link to={`/post/${props.id}`}>
                <PostItemImage
                    image={publicURL + props.image}
                    alt={props.title}
                />
            </Link>
            <div className="post-item__content">
                <span className="post-item__category">{props.category}</span>
                <Link to={`/post/${props.id}`}>
                    <p className="post-item__title">
                        {HtmlParser(props.title)}
                    </p>
                </Link>
                <PostItemMore
                    author={props.author}
                    createdAt={new Date(props.createdAt).toLocaleDateString()}
                />
                <Link to={`/post/${props.id}`}>
                    <p className="post-item__desc">{HtmlParser(props.desc)}</p>
                </Link>
            </div>
        </li>
    );
};
export default PostItem;
