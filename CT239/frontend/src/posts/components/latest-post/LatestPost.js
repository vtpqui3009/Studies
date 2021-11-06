import React, { useState, useEffect } from "react";
import LatestPostLayout from "./LatestPostLayout";
import PostWrapper from "../PostWrapper";
import axios from "axios";
import "./LatestPost.css";
const LatestPost = () => {
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [currentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/posts/?sort=createdAt"
                );
                const responseData = await response.data.posts;
                setLoadedPosts(responseData);
            } catch (err) {}
        };
        fetchPost();
    }, []);

    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);
    const filterPost = loadedPosts.filter(
        (post) => post.isApproved === "Approved"
    );

    if (!didMount) {
        return null;
    }
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filterPost.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <React.Fragment>
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
