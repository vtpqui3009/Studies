import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import Menu from "../shared/components/menu/Menu";
import PostDetail from "../posts/components/post-detail/PostDetail";
import Footer from "../shared/pages/Footer";
import OnTopButton from "../shared/components/UIElements/OnTopButton";
import { Container } from "react-bootstrap";
const PostDetailRoute = () => {
    return (
        <Container style={{ background: "white" }}>
            <MainNavigation />
            <SideBar />
            <Menu />
            <PostDetail />
            <Footer />
            <OnTopButton />
        </Container>
    );
};
export default PostDetailRoute;
