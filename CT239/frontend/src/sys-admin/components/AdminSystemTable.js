import React, { useEffect, useState } from "react";
import AdminDashboardTableItem from "../../admin/components/AdminDashboardTableItem";
import Pagination from "../../shared/components/Pagination/Pagination";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import AdminDashboardGrid from "../../admin/components/AdminDashboardGrid";
import axios from "axios";
const AdminSystemTable = (props) => {
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [isApproved, setIsApproved] = useState("");

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

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = loadedPosts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <React.Fragment>
            <AdminDashboardGrid
                successNumber={successNumber}
                successText="Bài viết đã duyệt"
                pendingNumber={pendingNumber}
                pendingText="Bài viết chưa duyệt"
            />
            <div className="admin-dashboard__table">
                <div className="admin-dashboard__table-heading">
                    <AdminDashboardTableItem text="Id" />
                    <AdminDashboardTableItem text="Tiêu đề" />
                    <AdminDashboardTableItem text="Mô tả" />
                    <AdminDashboardTableItem text="Nội dung" />
                    <AdminDashboardTableItem text="Trạng thái" />
                    <AdminDashboardTableItem text="Xem" />
                    <AdminDashboardTableItem text="Duyệt" />
                    <AdminDashboardTableItem text="Xóa" />
                </div>
                {isLoading && <LoadingSpinner asOverlay />}
                {currentPosts &&
                    currentPosts.map((post) => {
                        return (
                            <div
                                className="admin-dashboard__table-content"
                                key={post.id}
                            >
                                <AdminDashboardTableItem
                                    text={post.id.substr(0, 8)}
                                />
                                <AdminDashboardTableItem
                                    text={ReactHtmlParser(
                                        post.title.slice(0, 30)
                                    )}
                                />
                                <AdminDashboardTableItem
                                    text={ReactHtmlParser(
                                        post.description.slice(0, 100)
                                    )}
                                />
                                <AdminDashboardTableItem
                                    text={ReactHtmlParser(
                                        post.content.slice(0, 100)
                                    )}
                                />
                                <AdminDashboardTableItem
                                    text={post.isApproved}
                                />

                                <AdminDashboardTableItem
                                    text={
                                        <Link to={`view-post/${post.id}`}>
                                            <ion-icon
                                                name="eye-outline"
                                                style={{
                                                    color: "blue",
                                                    fontSize: "18px",
                                                    pointerEvent: "none"
                                                }}
                                            ></ion-icon>
                                        </Link>
                                    }
                                />

                                <AdminDashboardTableItem
                                    text={
                                        <ion-icon
                                            name="checkmark-outline"
                                            style={{
                                                color: "green",
                                                fontSize: "18px",
                                                pointerEvent: "none"
                                            }}
                                        ></ion-icon>
                                    }
                                    onClick={() => {
                                        setIsApproved("Approved");
                                        props.onApproveHandler(
                                            post.id,
                                            post.isApproved,
                                            isApproved
                                        );
                                    }}
                                />
                                <AdminDashboardTableItem
                                    text={
                                        <ion-icon
                                            name="close-outline"
                                            style={{
                                                color: "red",
                                                fontSize: "18px",
                                                pointerEvent: "none"
                                            }}
                                        ></ion-icon>
                                    }
                                    onClick={() => {
                                        // props.onDelete(post.id);
                                    }}
                                />
                            </div>
                        );
                    })}
            </div>
            <div className="admin-dashboard__pagination">
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={loadedPosts.length}
                    paginate={paginate}
                />
            </div>
        </React.Fragment>
    );
};
export default AdminSystemTable;
