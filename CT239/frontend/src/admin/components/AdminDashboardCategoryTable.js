import React, { useEffect, useState } from "react";
import AdminDashboardTableItem from "./AdminDashboardTableItem";
import axios from "axios";
import Pagination from "../../shared/components/Pagination/Pagination";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const AdminDashboardTable = () => {
    const [loadedCategories, setLoadedCategories] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [categoryPerPage] = useState(3);
    useEffect(() => {
        const fetchUsers = async () => {
            setIsloading(true);
            const response = await axios.get(
                "http://localhost:5000/api/category/all-category"
            );
            const responseData = await response.data.category;
            setLoadedCategories(responseData);
            console.log(responseData);
            setIsloading(false);
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
                    <AdminDashboardTableItem text="Ngày sửa" />
                    <AdminDashboardTableItem text="Xem" />
                    <AdminDashboardTableItem text="Duyệt" />
                    <AdminDashboardTableItem text="Xóa" />
                </div>
                {isLoading && <LoadingSpinner asOverlay />}
                {currentCategory &&
                    currentCategory.map((categories) => {
                        return (
                            <div className="admin-dashboard__table-content">
                                <AdminDashboardTableItem
                                    text={categories.id.substr(0, 4)}
                                />
                                <AdminDashboardTableItem
                                    text={categories.name}
                                />
                                <AdminDashboardTableItem
                                    text={categories.slug}
                                />
                                <AdminDashboardTableItem
                                    text={categories.createdAt}
                                />
                                <AdminDashboardTableItem
                                    text={categories.updatedAt}
                                />
                                <AdminDashboardTableItem
                                    text={
                                        <ion-icon name="eye-outline"></ion-icon>
                                    }
                                />
                                <AdminDashboardTableItem
                                    text={
                                        <ion-icon name="pencil-outline"></ion-icon>
                                    }
                                />
                                <AdminDashboardTableItem
                                    text={
                                        <ion-icon name="close-outline"></ion-icon>
                                    }
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
