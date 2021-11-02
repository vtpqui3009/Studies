import React from "react";
import AdminDashboardGridItem from "./AdminDashboardGridItem";
import "./AdminDashboardGrid.css";
const AdminDashboardGrid = (props) => {
    return (
        <div className="admin-dashboard__grid">
            <AdminDashboardGridItem
                header={<ion-icon name="thumbs-up-outline"></ion-icon>}
                content={props.successNumber}
                footer={props.successText}
            />
            <AdminDashboardGridItem
                header={<ion-icon name="bookmarks-outline"></ion-icon>}
                content={props.pendingNumber}
                footer={props.pendingText}
            />

            <AdminDashboardGridItem
                header={<ion-icon name="trash-bin-outline"></ion-icon>}
                content={props.failedNumber}
                footer={props.failedText}
            />
        </div>
    );
};
export default AdminDashboardGrid;
