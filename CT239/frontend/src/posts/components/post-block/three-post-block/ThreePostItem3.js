import React, { useState, useEffect } from "react";
import GlobalPostHeading from "../../post-item/GlobalPostHeading";
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
                // setIsLoading(true);
                const response = await axios.get(
                    "http://localhost:5000/api/posts/?catName=Giáo dục"
                );
                const responseData = response.data.posts;
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
    const filterPost = loadedPosts.filter(
        (post) => post.isApproved === "Approved"
    );
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filterPost.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <React.Fragment>
            <GlobalPostHeading education heading="GIÁO DỤC" />
            <ThreePostLayout threePosts={currentPosts} />
        </React.Fragment>
    );
};
export default ThreePostItem;
