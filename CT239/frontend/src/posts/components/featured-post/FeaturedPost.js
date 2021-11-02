import React, { useState, useEffect } from "react";
import FeaturedPostLayout from "./FeaturedPostLayout";
import FeaturedPostWrapper from "./FeaturedPostWrapper";
// import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import axios from "axios";
import "./FeaturedPost.css";
const FeaturedPosts = () => {
    const [featuredPosts, setfeaturedPosts] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [currentPage] = useState(1);
    const [postsPerPage] = useState(4);
    const [didMount, setDidMount] = useState(false);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // setIsLoading(true);
                const response = await axios.get(
                    "http://localhost:5000/api/posts"
                );
                const responseData = await response.data.posts;
                setfeaturedPosts(responseData);
                // setIsLoading(false);
            } catch (err) {}
        };
        fetchPosts();
    }, []);
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = featuredPosts.slice(indexOfFirstPost, indexOfLastPost);
    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }
    return (
        <React.Fragment>
            {/* {isLoading && <LoadingSpinner asOverlay />} */}
            <FeaturedPostWrapper
                className="featured-post"
                contentClass="post-item__content"
            >
                {featuredPosts && featuredPosts.length > 0 && (
                    <FeaturedPostLayout featuredPost={currentPosts} />
                )}
            </FeaturedPostWrapper>
        </React.Fragment>
    );
};
export default FeaturedPosts;