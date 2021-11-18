import React from "react";
import AdminSidebar from "./AdminSystemSidebar";
import AdminLogo from "../../admin/components/AdminLogo";
import AdminDashboardAvatar from "../../admin/components/AdminDashboardAvatar";
const AdminSystemLayout = () => {
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
                            <ion-icon
                                class="noti-icon"
                                name="notifications-outline"
                            ></ion-icon>
                        </div>
                        <AdminDashboardAvatar />
                    </div>
                </div>{" "}
            </div>{" "}
        </div>
    );
};
export default AdminSystemLayout;
