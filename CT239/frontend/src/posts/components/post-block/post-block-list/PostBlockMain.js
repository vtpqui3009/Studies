import React, { useState, useEffect } from "react";
import PostBlockLayout from "./PostBlockLayout";
import PostWrapper from "../../PostWrapper";
import LoadingSpinner from "../../../../shared/components/UIElements/LoadingSpinner";
import axios from "axios";
const PostBlockMain = () => {
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [didMount, setDidMount] = useState(false);
    useEffect(() => {
        const fetchPost = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    "http://localhost:5000/api/posts/?catName=Thế giới"
                );
                const responseData = await response.data.posts;
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

    if (!didMount) {
        return null;
    }
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = loadedPosts.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <React.Fragment>
            {isLoading && <LoadingSpinner asOverlay />}
            <PostWrapper
                className="post-block__item1"
                classCaption="post-block__caption1"
                classPostCategory="post-block____category1"
                postCategory="VĂN HÓA"
            >
                <PostBlockLayout postBLockList={currentPosts} />
            </PostWrapper>
        </React.Fragment>
    );
};
export default PostBlockMain;
