import React, { useState, useEffect } from "react";
import LatestPostLayout from "./LatestPostLayout";
import PostWrapper from "../PostWrapper";
import axios from "axios";
// import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import "./LatestPost.css";
const LatestPost = () => {
    const [loadedPosts, setLoadedPosts] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [currentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                // setIsLoading(true);
                const response = await axios.get(
                    "http://localhost:5000/api/posts/?sort=createdAt"
                );
                const responseData = await response.data.posts;
                setLoadedPosts(responseData);
                // setIsLoading(false);
            } catch (err) {}
        };
        fetchPost();
    }, []);

    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = loadedPosts.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <React.Fragment>
            {/* {isLoading && <LoadingSpinner asOverlay />} */}
            <PostWrapper
                className="latest-post"
                classCaption="latest-post__caption"
                classPostCategory="latest-post__category"
                postCategory="TIN MỚI NHẤT"
            >
                <LatestPostLayout latestPosts={currentPosts} />
            </PostWrapper>
        </React.Fragment>
    );
};
export default LatestPost;
