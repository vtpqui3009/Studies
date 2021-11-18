import React, { useState, useEffect } from "react";
import PostBlockLayout from "./PostBlockLayout";
import axios from "axios";
import GlobalPostHeading from "../../post-item/GlobalPostHeading";

const PostBlockMain = () => {
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [currentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [didMount, setDidMount] = useState(false);
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/posts/?catName=Thế giới"
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

    if (!didMount) {
        return null;
    }
    const filterPost = loadedPosts.filter(
        (post) => post.isApproved === "Approved"
    );
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filterPost.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <React.Fragment>
            <GlobalPostHeading list heading="THẾ GIỚI" />
            <PostBlockLayout postBLockList={currentPosts} />
        </React.Fragment>
    );
};
export default PostBlockMain;
