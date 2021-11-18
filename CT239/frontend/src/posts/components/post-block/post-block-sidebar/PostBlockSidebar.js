import React, { useState, useEffect } from "react";
import PostBlockSidebarLayout from "./PostBlockSidebarLayout";
import axios from "axios";
import GlobalPostHeading from "../../post-item/GlobalPostHeading";
import "./PostBlockSidebar.css";
const PostBlockSidebar = () => {
    const [didMount, setDidMount] = useState(false);
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [currentPage] = useState(1);
    const [postsPerPage] = useState(3);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/posts/?catName=Văn hóa"
                );
                const responseData = response.data.posts;
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
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filterPost.slice(indexOfFirstPost, indexOfLastPost);
    if (!didMount) {
        return null;
    }
    return (
        <React.Fragment>
            <GlobalPostHeading sidebar heading="VĂN HÓA" />
            <PostBlockSidebarLayout postsSidebar={currentPosts} />
        </React.Fragment>
    );
};
export default PostBlockSidebar;
