import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
// import AdminSystem from "../sys-admin/pages/AdminSystem";
import AdminSystemPage from "../sys-admin/pages/AdminSystemPage";
const AdminRoute = () => {
    return (
        <React.Fragment>
            <SideBar />
            <MainNavigation />
            <AdminSystemPage />
        </React.Fragment>
    );
};
export default AdminRoute;
