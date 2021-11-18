import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import Posts from "../posts/pages/Posts";

const HomeRoute = () => {
    return (
        <React.Fragment>
            <SideBar />
            <MainNavigation />
            <Posts />
        </React.Fragment>
    );
};
export default HomeRoute;
