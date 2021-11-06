import React, { useState, useEffect } from "react";
import AdminPostList from "../components/NewPost/AdminPostList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Button from "../../shared/components/FormElement/Button";
import Pagination from "../../shared/components/Pagination/Pagination";
// import MainNavigation from "../../shared/components/navigation/MainNavigation";
import axios from "axios";
import "../components/NewPost/AdminPostList.css";
const NewPost = () => {
    const { error, clearError } = useHttpClient();
    const [isLoading, setIsloading] = useState(false);
    const [loadedPosts, setloadedPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    // const [openNoti, setOpenNoti] = useState(false);
    // const [pendingNumber, setPendingNumber] = useState([]);
    useEffect(() => {
        const sendRequest = async () => {
            try {
                setIsloading(true);
                const response = await axios.get(
                    "http://localhost:5000/api/posts/?sort=createdAt"
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
    const currentPosts = loadedPosts.slice(indexOfFirstPost, indexOfLastPost);

    //Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const filterPost = loadedPosts.filter(
        (post) => post.isApproved !== "Approved"
    );
    let filteredPost = filterPost.length;
    let newPendingNumber = filteredPost;

    console.log(newPendingNumber);
    console.log(filteredPost);

    // const notiHanler = () => {
    //     setOpenNoti(true);
    // };
    // const closeNotiPanelHandler = () => {
    //     setOpenNoti(false);
    // };
    return (
        <div className="post-page">
            <ErrorModal error={error} onClear={clearError} />
            {/* <MainNavigation
                noti={
                    <React.Fragment>
                        <div className="author-badge">1</div>
                        <ion-icon
                            class="noti-icon"
                            name="notifications-outline"
                            onClick={notiHanler}
                        ></ion-icon>
                        {openNoti && (
                            <React.Fragment>
                                <div className="noti-panel__author">
                                    <div className="noti-item">
                                        Bạn có 1 bài viết chưa duyệt
                                    </div>
                                </div>
                                <div
                                    className="noti-backdrop"
                                    onClick={closeNotiPanelHandler}
                                ></div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                }
            /> */}
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
