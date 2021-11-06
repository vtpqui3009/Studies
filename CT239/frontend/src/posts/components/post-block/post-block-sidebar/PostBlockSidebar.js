import React, { useState, useEffect } from "react";
import PostWrapper from "../../PostWrapper";
import PostBlockSidebarLayout from "./PostBlockSidebarLayout";
import axios from "axios";
import LoadingSpinner from "../../../../shared/components/UIElements/LoadingSpinner";
import "./PostBlockSidebar.css";
const PostBlockSidebar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [didMount, setDidMount] = useState(false);
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [currentPage] = useState(1);
    const [postsPerPage] = useState(3);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    "http://localhost:5000/api/posts/?catName=Văn hóa"
                );
                const responseData = response.data.posts;
                setLoadedPosts(responseData);
                setIsLoading(false);
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
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filterPost.slice(indexOfFirstPost, indexOfLastPost);
    if (!didMount) {
        return null;
    }
    return (
        <React.Fragment>
            {isLoading && <LoadingSpinner asOverlay />}

            <PostWrapper
                className="post-block__sidebar"
                classCaption="sidebar-caption"
                classPostCategory="sidebar-category"
                postCategory="THẾ GIỚI"
            >
                <PostBlockSidebarLayout postsSidebar={currentPosts} />
            </PostWrapper>
        </React.Fragment>
    );
};
export default PostBlockSidebar;
