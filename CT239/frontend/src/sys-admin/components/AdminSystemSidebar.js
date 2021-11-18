import React from "react";
import AdminLogo from "../../admin/components/AdminLogo";
import AdminSidebarItem from "../../admin/components/AdminSidebarItem";
import { Link } from "react-router-dom";
const AdminSidebar = () => {
    return (
        <div className="admin-sidebar">
            <div className="admin-sidebar__logo">
                <AdminLogo chilren="Dashboard" />
            </div>
            <div className="admin-sidebar__list">
                <AdminSidebarItem
                    sidebarText={
                        <Link
                            to="/sys-admin"
                            style={{ color: "white", textDecoration: "none" }}
                        >
                            Danh sách User
                        </Link>
                    }
                />
            </div>
        </div>
    );
};
export default AdminSidebar;
