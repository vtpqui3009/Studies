import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import UpdateCategory from "../categories/pages/UpdateCategory/UpdateCategory";
const UpdateCategoryRoute = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <SideBar />
            <UpdateCategory />
        </React.Fragment>
    );
};
export default UpdateCategoryRoute;
