import React from "react";
import AdminGreeting from "./AdminGretting";
import AdminSidebar from "./AdminSidebar";
import AdminDashboardTable from "./AdminDashboardTable";
import AdminLogo from "./AdminLogo";
import AdminDashboardAvatar from "./AdminDashboardAvatar";
import "./AdminPage.css";
const AdminPendingPostPage = () => {
    return (
        <div className="admin">
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
                            <ion-icon name="notifications-outline"></ion-icon>
                        </div>
                        <AdminDashboardAvatar />
                    </div>
                </div>
                <AdminGreeting />
                <AdminDashboardTable />
            </div>
        </div>
    );
};
export default AdminPendingPostPage;
