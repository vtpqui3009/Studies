import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import UpdatePost from "../posts/pages/UpdatePost/UpdatePost";
const UpdatePostRoute = () => {
    return (
        <React.Fragment>
            <SideBar />
            <MainNavigation />
            <UpdatePost />
        </React.Fragment>
    );
};
export default UpdatePostRoute;
