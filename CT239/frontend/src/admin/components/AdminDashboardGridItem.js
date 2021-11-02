import React from "react";
const AdminDashboardGridItem = (props) => {
    return (
        <div className="admin-dashboard__grid-item">
            <div className="admin-dashboard__grid-header">{props.header}</div>
            <div className="admin-dashboard__grid-wrapper">
                <div className="admin-dashboard__grid-content">
                    {props.content}
                </div>
                <div className="admin-dashboard__grid-footer">
                    {props.footer}
                </div>
            </div>
        </div>
    );
};
export default AdminDashboardGridItem;
