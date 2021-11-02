import React from "react";
import AdminSidebar from "../admin/components/AdminSidebar";
import UpdateUser from "../sys-admin/pages/UpdateUser/UpdateUser";
import AdminLogo from "../admin/components/AdminLogo";
import AdminDashboardAvatar from "../admin/components/AdminDashboardAvatar";
const AdminRoute = () => {
    return (
        <React.Fragment>
            <AdminSidebar />
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
                        </div>
                        <AdminDashboardAvatar />
                    </div>
                </div>
            </div>
            <UpdateUser />
        </React.Fragment>
    );
};
export default AdminRoute;
