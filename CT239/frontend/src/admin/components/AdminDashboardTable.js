import React, { useEffect, useState } from "react";
import AdminDashboardTableItem from "./AdminDashboardTableItem";
import axios from "axios";
import Pagination from "../../shared/components/Pagination/Pagination";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { Link } from "react-router-dom";
import "./AdminDashboardTable.css";
const AdminDashboardTable = () => {
    const [loadedUsers, setLoadedUsers] = useState([]);
    const publicURL = "http://localhost:5000/";
    const [isLoading, setIsloading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(3);
    useEffect(() => {
        const fetchUsers = async () => {
            setIsloading(true);
            const response = await axios.get(
                "http://localhost:5000/api/users/all-user"
            );
            const reponseData = await response.data.user;
            setLoadedUsers(reponseData);
            setIsloading(false);
        };
        fetchUsers();
    }, []);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = loadedUsers.slice(indexOfFirstUser, indexOfLastUser);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <React.Fragment>
            <div className="admin-dashboard__table">
                <div className="admin-dashboard__table-heading">
                    <AdminDashboardTableItem text="Id" />
                    <AdminDashboardTableItem text="Tên" />
                    <AdminDashboardTableItem text="Username" />
                    <AdminDashboardTableItem text="Email" />
                    <AdminDashboardTableItem text="Ngày tạo" />
                    <AdminDashboardTableItem text="Profile" />
                    <AdminDashboardTableItem text="Role" />
                    <AdminDashboardTableItem text="Sửa" />
                    <AdminDashboardTableItem text="Xóa" />
                </div>
                {isLoading && <LoadingSpinner asOverlay />}
                {currentUsers &&
                    currentUsers.map((user) => {
                        return (
                            <div
                                className="admin-dashboard__table-content"
                                key={user.id}
                            >
                                <AdminDashboardTableItem
                                    text={user.id.substr(0, 8)}
                                />
                                <AdminDashboardTableItem text={user.name} />
                                <AdminDashboardTableItem text={user.username} />
                                <AdminDashboardTableItem text={user.email} />
                                <AdminDashboardTableItem
                                    text={new Date().toDateString(
                                        user.createdAt
                                    )}
                                />
                                <AdminDashboardTableItem
                                    text={
                                        <img
                                            src={publicURL + user.avatar}
                                            alt=""
                                            className="admin-dashboard__user-avatar"
                                        />
                                    }
                                />
                                <AdminDashboardTableItem text={user.role} />

                                <AdminDashboardTableItem
                                    text={
                                        <Link to={`/update/user/${user.id}`}>
                                            <ion-icon name="pencil-outline"></ion-icon>
                                        </Link>
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
                    postsPerPage={usersPerPage}
                    totalPosts={loadedUsers.length}
                    paginate={paginate}
                />
            </div>
        </React.Fragment>
    );
};
export default AdminDashboardTable;
