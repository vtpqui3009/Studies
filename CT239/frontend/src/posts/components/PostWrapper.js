import React from "react";
const PostWrapper = (props) => {
    return (
        <div className={props.className}>
            <div className={props.classCaption}>
                <span className={props.classPostCategory}>
                    {props.postCategory}
                </span>
                <hr></hr>
            </div>
            {props.children}
        </div>
    );
};
export default PostWrapper;
