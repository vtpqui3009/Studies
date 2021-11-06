import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import Menu from "../shared/components/menu/Menu";
import PostDetail from "../posts/components/post-detail/PostDetail";
import Footer from "../shared/pages/Footer";
const PostDetailRoute = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <SideBar />
            <Menu />
            <PostDetail />
            <Footer />
        </React.Fragment>
    );
};
export default PostDetailRoute;
