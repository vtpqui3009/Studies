import React from "react";
import AdminSidebarItem from "../../admin/components/AdminSidebarItem";
import AdminLogo from "../../admin/components/AdminLogo";
import { NavLink } from "react-router-dom";
const AdminSystemSidebar = () => {
    return (
        <div className="admin-sidebar">
            <div className="admin-sidebar__logo">
                <AdminLogo chilren="Dashboard" />
            </div>
            <div className="admin-sidebar__list">
                <NavLink to="/admin">
                    <AdminSidebarItem sidebarText="Bài viết đang chờ" />
                </NavLink>
                <NavLink to="/admin/pending-category">
                    <AdminSidebarItem sidebarText="Danh mục đang chờ" />
                </NavLink>
            </div>
        </div>
    );
};
export default AdminSystemSidebar;
