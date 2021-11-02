import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
// import Menu from "../shared/components/menu/Menu";
// import Footer from "../shared/pages/Footer";
import Posts from "../posts/pages/Posts";

const HomeRoute = () => {
    return (
        <React.Fragment>
            {/* <Menu /> */}
            <SideBar />
            <MainNavigation />
            <Posts />
            {/* <Footer /> */}
        </React.Fragment>
    );
};
export default HomeRoute;
