import React, { useState, useEffect } from "react";
import AdminPostList from "../components/NewPost/AdminPostList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Button from "../../shared/components/FormElement/Button";
import Pagination from "../../shared/components/Pagination/Pagination";
import axios from "axios";
import "../components/NewPost/AdminPostList.css";
const NewPost = () => {
    const { error, clearError } = useHttpClient();
    const [isLoading, setIsloading] = useState(false);
    const [loadedPosts, setloadedPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    useEffect(() => {
        const sendRequest = async () => {
            try {
                setIsloading(true);
                const response = await axios.get(
                    "http://localhost:5000/api/posts/"
                );
                const responseData = await response.data.posts;
                setloadedPosts(responseData);
                setIsloading(false);
            } catch (err) {}
        };
        sendRequest();
    }, []);
    const postDeleteHandler = (deletedId) => {
        setloadedPosts((prevPosts) =>
            prevPosts.filter((post) => post.id !== deletedId)
        );
    };
    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = loadedPosts.slice(indexOfFirstPost, indexOfLastPost);

    //Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    // let filterPost = currentPosts.filter(
    //     (post) => post.isApproved === "UnApproved"
    // );
    // if (filterPost) {
    //     currentPosts = null;
    // }
    // console.log(filterPost);
    // console.log(filterPost.length);

    return (
        <div className="post-page">
            <ErrorModal error={error} onClear={clearError} />

            {currentPosts && currentPosts.length === 0 && (
                <div className="no-post__found">
                    <span>
                        Chưa có bài viết nào được tạo. Tạo bài viết mới ngay ?
                    </span>
                    <Button primary to="/add-post">
                        <div className="form-control__add">
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <span>Thêm bài viết</span>
                        </div>
                    </Button>
                </div>
            )}
            {isLoading && <LoadingSpinner asOverlay />}
            {currentPosts && currentPosts.length > 0 && (
                <AdminPostList
                    postList={currentPosts}
                    onDeletePost={postDeleteHandler}
                />
            )}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={loadedPosts.length}
                paginate={paginate}
            />
        </div>
    );
};
export default NewPost;
