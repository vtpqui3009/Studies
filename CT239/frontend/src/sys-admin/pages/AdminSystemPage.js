import React, { useState, useEffect } from "react";
import AdminLogo from "../../admin/components/AdminLogo";
import AdminDashboardGrid from "../../admin/components/AdminDashboardGrid";
import AdminSystemTable from "../components/AdminSystemTable";
import AdminDashboardAvatar from "../../admin/components/AdminDashboardAvatar";
import AdminSystemSidebar from "../components/AdminSystemSidebar";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import Pagination from "../../shared/components/Pagination/Pagination";
import axios from "axios";
import "./AdminSystemPage.css";
const AdminSystemPage = () => {
    const [isLoading, setIsloading] = useState(false);
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [failedNumber] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [openNoti, setOpenNoti] = useState(false);
    useEffect(() => {
        const fetchUsers = async () => {
            setIsloading(true);
            const response = await axios.get(
                "http://localhost:5000/api/posts/"
            );
            const reponseData = await response.data.posts;
            setLoadedPosts(reponseData);
            setIsloading(false);
        };
        fetchUsers();
    }, []);
    let filterApprovedPost = loadedPosts.filter(
        (post) => post.isApproved === "Approved"
    );
    let filterUnApprovedPost = loadedPosts.filter(
        (post) => post.isApproved !== "Approved"
    );
    let successNumber = filterApprovedPost.length;
    let pendingNumber = filterUnApprovedPost.length;

    const postDeleteHandler = (deletedId) => {
        setLoadedPosts((prevPosts) =>
            prevPosts.filter((post) => post.id !== deletedId)
        );
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = loadedPosts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const notiHanler = () => {
        setOpenNoti(true);
    };
    const closeNotiPanelHandler = () => {
        setOpenNoti(false);
    };
    return (
        <React.Fragment>
            <div className="admin">
                {isLoading && <LoadingSpinner asOverlay />}
                <AdminSystemSidebar />
                <div className="admin-dashboard">
                    <div className="admin-dashboard__heading">
                        <AdminLogo chilren="Dashboard" />
                        <div className="admin-dashboard__more">
                            <div className="admin-dashboard__search">
                                <input type="text" />
                                <ion-icon name="search-outline"></ion-icon>
                            </div>
                            <div className="admin-dashboard__notification">
                                {pendingNumber > 0 && (
                                    <div className="badge">{pendingNumber}</div>
                                )}
                                <ion-icon
                                    class="noti-icon"
                                    name="notifications-outline"
                                    onClick={notiHanler}
                                ></ion-icon>

                                {openNoti && (
                                    <React.Fragment>
                                        <div className="noti-panel">
                                            <div className="noti-item">
                                                {pendingNumber ? (
                                                    <span>
                                                        Bạn có {pendingNumber}{" "}
                                                        bài viết chưa duyệt
                                                    </span>
                                                ) : (
                                                    <span>
                                                        Không có thông báo nào
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div
                                            className="noti-backdrop"
                                            onClick={closeNotiPanelHandler}
                                        ></div>
                                    </React.Fragment>
                                )}
                            </div>
                            <AdminDashboardAvatar />
                        </div>
                    </div>
                    <AdminDashboardGrid
                        successNumber={successNumber}
                        successText="Bài viết đã duyệt"
                        pendingNumber={pendingNumber}
                        pendingText="Bài viết chưa duyệt"
                        failedNumber={failedNumber}
                        failedText="Bài viết đã xóa"
                    />{" "}
                    <AdminSystemTable
                        posts={currentPosts}
                        onDeletePost={postDeleteHandler}
                    />{" "}
                    <div className="admin-dashboard__pagination">
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={loadedPosts.length}
                            paginate={paginate}
                        />{" "}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default AdminSystemPage;
