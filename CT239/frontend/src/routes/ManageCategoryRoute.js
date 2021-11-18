import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import ManageCategory from "../categories/pages/ManageCategory";
const ManageCategoryRoute = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <SideBar />
            <ManageCategory />
        </React.Fragment>
    );
};
export default ManageCategoryRoute;
