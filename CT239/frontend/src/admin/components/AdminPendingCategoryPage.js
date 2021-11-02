import React from "react";
import AdminDashboardGrid from "./AdminDashboardGrid";
import AdminDashboardCategoryTable from "./AdminDashboardCategoryTable";
import AdminSystemSidebar from "../../sys-admin/components/AdminSystemSidebar";
import AdminLogo from "./AdminLogo";
import AdminDashboardAvatar from "./AdminDashboardAvatar";
// import "./AdminPage.css";
const AdminPendingCategoryPage = () => {
    return (
        <div className="admin">
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
                            <ion-icon name="notifications-outline"></ion-icon>
                        </div>
                        <AdminDashboardAvatar />
                    </div>
                </div>
                <AdminDashboardGrid />
                <AdminDashboardCategoryTable />
            </div>
        </div>
    );
};
export default AdminPendingCategoryPage;
