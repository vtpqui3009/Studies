import React, { useState, useEffect } from "react";
import LatestPostLayout from "./LatestPostLayout";
import GlobalPostHeading from "../post-item/GlobalPostHeading";
import axios from "axios";
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
            <GlobalPostHeading latest heading="TIN MỚI NHẤT" />
            <LatestPostLayout latestPosts={currentPosts} />
        </React.Fragment>
    );
};
export default LatestPost;
