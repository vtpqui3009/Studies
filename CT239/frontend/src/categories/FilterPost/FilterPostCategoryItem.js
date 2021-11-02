import React from "react";
import { Link } from "react-router-dom";
import PostItemMore from "../../posts/components/layout/PostItemMore";
import PostItemImage from "../../posts/components/layout/PostItemImage";
const FilterPostCategoryItem = (props) => {
    const publicURL = "http://localhost:5000/";
    return (
        <li className="filter-post__item" key={props.id}>
            <Link to={`/post/${props.id}`}>
                <PostItemImage
                    image={publicURL + props.image}
                    alt={props.title}
                />
            </Link>
            <div className="filter-post__content">
                <span className="filter-post__category">{props.category}</span>
                <Link to={`/post/${props.id}`}>
                    <p className="filter-post__title">{props.title}</p>
                </Link>
                <Link to={`/post/${props.id}`}>
                    <p className="filter-post__desc">{props.desc}</p>
                </Link>{" "}
                <PostItemMore
                    author={props.author}
                    createdAt={new Date(props.createdAt).toLocaleString()}
                />
            </div>
        </li>
    );
};
export default FilterPostCategoryItem;
