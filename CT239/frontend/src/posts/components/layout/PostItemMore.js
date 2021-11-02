import React from "react";
const PostItemMore = (props) => {
    return (
        <div className="post-item__more">
            <div className="post-item__author">
                <ion-icon name="person-outline"></ion-icon>
                <span>{props.author}</span>
            </div>
            <div className="post-item__date">
                <ion-icon name="time-outline"></ion-icon>
                <span>{props.createdAt}</span>
            </div>
        </div>
    );
};
export default PostItemMore;
