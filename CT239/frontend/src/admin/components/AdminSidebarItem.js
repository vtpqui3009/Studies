import React from "react";
const AdminSidebarItem = (props) => {
    return (
        <div className="admin-sidebar__item ">
            <span>{props.sidebarText}</span>
        </div>
    );
};
export default AdminSidebarItem;
