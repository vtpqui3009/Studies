import React, { useState, useEffect } from "react";
import PostWrapper from "../../PostWrapper";
import ThreePostLayout from "./ThreePostLayout";
import axios from "axios";
const ThreePostItem = () => {
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [currentPage] = useState(1);
    const [postsPerPage] = useState(4);
    const [didMount, setDidMount] = useState(false);
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/posts/?catName=Thể thao"
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

    if (!didMount) {
        return null;
    }
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = loadedPosts.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <PostWrapper
            className="three-post_item1"
            classCaption="item1-caption"
            classPostCategory="item1-category"
            postCategory="THỂ THAO "
        >
            <ThreePostLayout threePosts={currentPosts} />
        </PostWrapper>
    );
};
export default ThreePostItem;
