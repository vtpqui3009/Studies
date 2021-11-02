import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import NewPost from "../posts/pages/NewPost";
const ManagePostRoute = () => {
    return (
        <React.Fragment>
            <NewPost />
            <MainNavigation />
            <SideBar />
        </React.Fragment>
    );
};
export default ManagePostRoute;
