import React from "react";

const AdminDashboardTableItem = (props) => {
    return (
        <div
            className="admin-dashboard__table-item"
            style={props.style}
            onClick={props.onClick}
        >
            {props.text}
        </div>
    );
};
export default AdminDashboardTableItem;
