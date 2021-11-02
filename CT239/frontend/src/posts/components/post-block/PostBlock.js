import React, { Fragment } from "react";
import PostBlockMain from "./post-block-list/PostBlockMain";
import PostBlockSidebar from "./post-block-sidebar/PostBlockSidebar";
import PostBlockWrapper from "./PostBlockWrapper";
import ThreePostBlock from "./three-post-block/ThreePostBlock";
const PostBlock = () => {
    return (
        <Fragment>
            <PostBlockWrapper className="post-block__wrapper">
                <PostBlockMain />
                <PostBlockSidebar />
            </PostBlockWrapper>
            <PostBlockWrapper PostBlockWrapper className="three-post__block">
                <ThreePostBlock />
            </PostBlockWrapper>
        </Fragment>
    );
};
export default PostBlock;
