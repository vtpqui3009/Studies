import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import UpdateUser from "../sys-admin/pages/UpdateUser/UpdateUser";
const UpdatePostRoute = () => {
    return (
        <React.Fragment>
            <SideBar />
            <MainNavigation />
            <UpdateUser />
        </React.Fragment>
    );
};
export default UpdatePostRoute;
