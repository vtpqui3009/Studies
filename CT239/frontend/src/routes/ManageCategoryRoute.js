import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import NewCategory from "../categories/pages/NewCategory";
const ManageCategoryRoute = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <SideBar />
            <NewCategory />
        </React.Fragment>
    );
};
export default ManageCategoryRoute;
