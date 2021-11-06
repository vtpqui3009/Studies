import React, { useEffect, useState, useContext } from "react";
import AdminDashboardTableItem from "./AdminDashboardTableItem";
import Pagination from "../../shared/components/Pagination/Pagination";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { Link } from "react-router-dom";
import axios from "axios";
const AdminDashboardTable = (props) => {
    const { sendRequest } = useHttpClient();
    const [loadedCategories, setLoadedCategories] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [categoryPerPage] = useState(3);
    const auth = useContext(AuthContext);
    useEffect(() => {
        const fetchUsers = async () => {
            setIsloading(true);
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/category/all-category"
                );
                const responseData = await response.data.category;
                setLoadedCategories(responseData);
                setIsloading(false);
            } catch (err) {}
        };
        fetchUsers();
    }, []);
    const indexOfLastUser = currentPage * categoryPerPage;
    const indexOfFirstUser = indexOfLastUser - categoryPerPage;
    const currentCategory = loadedCategories.slice(
        indexOfFirstUser,
        indexOfLastUser
    );
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <React.Fragment>
            <div className="admin-dashboard__table">
                <div className="admin-dashboard__table-heading">
                    <AdminDashboardTableItem text="Id" />
                    <AdminDashboardTableItem text="Tên" />
                    <AdminDashboardTableItem text="Slug" />
                    <AdminDashboardTableItem text="Ngày tạo" />
                    <AdminDashboardTableItem text="Trạng thái" />
                    <AdminDashboardTableItem text="Xem" />
                    <AdminDashboardTableItem text="Duyệt" />
                    <AdminDashboardTableItem text="Xóa" />
                </div>
                {isLoading && <LoadingSpinner asOverlay />}
                {currentCategory &&
                    currentCategory.map((categories) => {
                        return (
                            <div
                                className="admin-dashboard__table-content"
                                key={categories.id}
                            >
                                <AdminDashboardTableItem
                                    text={categories.id.substr(0, 8)}
                                />
                                <AdminDashboardTableItem
                                    text={categories.name}
                                />
                                <AdminDashboardTableItem
                                    text={categories.slug}
                                />
                                <AdminDashboardTableItem
                                    text={new Date(
                                        categories.createdAt
                                    ).toLocaleString()}
                                />
                                <AdminDashboardTableItem
                                    text={categories.isApproved}
                                />
                                <AdminDashboardTableItem
                                    text={
                                        <Link
                                            to={`/view-category/${categories.id}`}
                                        >
                                            {" "}
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
                                    onClick={async () => {
                                        if (
                                            categories.isApproved !== "Approved"
                                        ) {
                                            categories.isApproved = "Approved";
                                        }
                                        setIsloading(true);
                                        try {
                                            await sendRequest(
                                                "http://localhost:5000/api/category/update/status/" +
                                                    categories.id,
                                                "PATCH",
                                                {
                                                    "Content-Type":
                                                        "application/json",
                                                    Authorization:
                                                        "Bearer " + auth.token
                                                },
                                                JSON.stringify({
                                                    isApproved:
                                                        categories.isApproved
                                                })
                                            );
                                            setIsloading(false);
                                        } catch (err) {}
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
                                    onClick={async () => {
                                        setIsloading(true);
                                        try {
                                            await sendRequest(
                                                "http://localhost:5000/api/category/delete/" +
                                                    categories.id,
                                                "DELETE",
                                                {
                                                    "Content-Type":
                                                        "application/json",
                                                    Authorization:
                                                        "Bearer " + auth.token
                                                }
                                            );
                                            setIsloading(false);
                                        } catch (err) {}
                                        props.onDeletePost(categories.id);
                                    }}
                                />
                            </div>
                        );
                    })}
            </div>
            <div className="admin-dashboard__pagination">
                <Pagination
                    postsPerPage={categoryPerPage}
                    totalPosts={loadedCategories.length}
                    paginate={paginate}
                />
            </div>
        </React.Fragment>
    );
};
export default AdminDashboardTable;
