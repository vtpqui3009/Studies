import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import Admin from "../admin/pages/Admin";
import AdminPage from "../admin/components/AdminPage";
const SystemAdminRoute = () => {
    return (
        <React.Fragment>
            <SideBar />
            <MainNavigation />
            <AdminPage />
        </React.Fragment>
    );
};
export default SystemAdminRoute;
