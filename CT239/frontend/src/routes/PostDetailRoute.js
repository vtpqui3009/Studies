import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import Menu from "../shared/components/menu/Menu";
import PostDetail from "../posts/components/post-detail/PostDetail";
const PostDetailRoute = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <SideBar />
            <Menu />
            <PostDetail />
        </React.Fragment>
    );
};
export default PostDetailRoute;
