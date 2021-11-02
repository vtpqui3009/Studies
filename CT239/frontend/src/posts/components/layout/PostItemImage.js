import React from "react";
const PostItemImage = (props) => {
    return (
        <div
            placeholder={<img src={props.image} alt="..." />}
            className="post-item__image"
        >
            {props.image && <img src={props.image} alt={props.title} />}

            <div className="post-item__imageWrapper"></div>
        </div>
    );
};
export default PostItemImage;
