import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import NewPost from "../posts/pages/NewPost";
import MainNavigation from "../shared/components/navigation/MainNavigation";
const ManagePostRoute = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <NewPost />
            <SideBar />
        </React.Fragment>
    );
};
export default ManagePostRoute;
