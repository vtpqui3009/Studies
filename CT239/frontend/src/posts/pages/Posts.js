import React from "react";
import FeaturedPosts from "../components/featured-post/FeaturedPost";
import LatestPost from "../components/latest-post/LatestPost";
import PostBlock from "../components/post-block/PostBlock";
import Menu from "../../shared/components/menu/Menu";
import Footer from "../../shared/pages/Footer";
import Progress from "../../shared/components/progress/Progress";
import OnTopButton from "../../shared/components/UIElements/OnTopButton";
const Posts = () => {
    return (
        <React.Fragment>
            <Progress />
            <Menu />
            <main style={{ padding: "0 100px 0 40px" }}>
                <FeaturedPosts />
                <LatestPost />
                <PostBlock />
            </main>
            <Footer />
            <OnTopButton />
        </React.Fragment>
    );
};
export default Posts;
