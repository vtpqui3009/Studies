import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import UserInfo from "../shared/components/Info/UserInfo";
const UserInforRoute = () => {
    return (
        <React.Fragment>
            <SideBar />
            <MainNavigation />
            <UserInfo />
        </React.Fragment>
    );
};
export default UserInforRoute;
