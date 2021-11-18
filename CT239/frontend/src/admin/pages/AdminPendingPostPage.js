import React, { useState, useEffect } from "react";
import AdminLogo from "../../admin/components/AdminLogo";
import AdminDashboardGrid from "../../admin/components/AdminDashboardGrid";
import AdminDashboardAvatar from "../../admin/components/AdminDashboardAvatar";
import AdminSidebar from "../components/AdminSidebar";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import axios from "axios";
import PostDataTalbe from "../components/admin-post-item/PostDataTable";
import { StyledAdminTable } from "../components/GlobalAdminStyled";
const AdminPendingPostPage = () => {
    const [isLoading, setIsloading] = useState(false);
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [openNoti, setOpenNoti] = useState(false);
    const [deletedPost] = useState(0);
    const deletedNumber = deletedPost;
    const notiHanler = () => {
        setOpenNoti(true);
    };
    const closeNotiPanelHandler = () => {
        setOpenNoti(false);
    };
    useEffect(() => {
        const fetchUsers = async () => {
            setIsloading(true);
            const response = await axios.get(
                "http://localhost:5000/api/posts/?sort=createdAt"
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

    return (
        <React.Fragment>
            <div className="admin">
                {isLoading && <LoadingSpinner asOverlay />}
                <AdminSidebar />
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
                        failedNumber={deletedNumber}
                        failedText="Bài viết đã xóa"
                    />{" "}
                    <StyledAdminTable>
                        {" "}
                        <PostDataTalbe />
                    </StyledAdminTable>
                </div>
            </div>
        </React.Fragment>
    );
};
export default AdminPendingPostPage;
