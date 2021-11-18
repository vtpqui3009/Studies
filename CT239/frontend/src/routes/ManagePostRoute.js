import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import ManagePost from "../posts/pages/ManagePost";
import MainNavigation from "../shared/components/navigation/MainNavigation";
const ManagePostRoute = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <ManagePost />
            <SideBar />
        </React.Fragment>
    );
};
export default ManagePostRoute;
