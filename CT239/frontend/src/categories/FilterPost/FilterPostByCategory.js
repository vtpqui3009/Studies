import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import FiltterPostCategoryItem from "./FilterPostCategoryItem";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import Pagination from "../../shared/components/Pagination/Pagination";
import "./FilterPostByCategory.css";
const FilterPostByCategory = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const location = useLocation();
    const pathname = location.pathname.split("/")[1];

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    "http://localhost:5000/api/category/" + pathname
                );
                const responseData = await response.data;
                setIsLoading(true);
                const newResponse = await axios.get(
                    "http://localhost:5000/api/posts/" +
                        `?catName=${responseData.category.name}`
                );
                setPosts(newResponse.data.posts);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        };
        fetchCategory();
    }, [pathname]);
    const filterPost = posts.filter((post) => post.isApproved === "Approved");
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filterPost.slice(indexOfFirstPost, indexOfLastPost);

    //Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="filter-post__wrapper">
            {isLoading && <LoadingSpinner asOverlay />}
            <ul className="filter-post__list">
                {currentPosts.map((post) => {
                    return (
                        <FiltterPostCategoryItem
                            key={post.id}
                            id={post.id}
                            category={post.category}
                            image={post.image}
                            title={ReactHtmlParser(post.title)}
                            desc={ReactHtmlParser(post.description)}
                            author={post.author}
                            createdAt={post.createdAt}
                        />
                    );
                })}
            </ul>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    );
};
export default FilterPostByCategory;
