import React from "react";
import FeaturedPosts from "../components/featured-post/FeaturedPost";
import LatestPost from "../components/latest-post/LatestPost";
import PostBlock from "../components/post-block/PostBlock";
import Menu from "../../shared/components/menu/Menu";
import Footer from "../../shared/pages/Footer";
import Progress from "../../shared/components/progress/Progress";
import OnTopButton from "../../shared/components/UIElements/OnTopButton";
import { Container } from "react-bootstrap";
const Posts = () => {
    return (
        <React.Fragment>
            <Progress />
            <Container style={{ background: "white" }}>
                <Menu />
                <FeaturedPosts />
                <LatestPost />
                <PostBlock />
                <Footer />
            </Container>
            <OnTopButton />
        </React.Fragment>
    );
};
export default Posts;
