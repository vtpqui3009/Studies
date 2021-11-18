import React, { useState, useEffect } from "react";
import ThreePostLayout from "./ThreePostLayout";
import GlobalPostHeading from "../../post-item/GlobalPostHeading";
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
    const filterPost = loadedPosts.filter(
        (post) => post.isApproved === "Approved"
    );
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filterPost.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <React.Fragment>
            <GlobalPostHeading sport heading="THỂ THAO" />
            <ThreePostLayout threePosts={currentPosts} />
        </React.Fragment>
    );
};
export default ThreePostItem;
