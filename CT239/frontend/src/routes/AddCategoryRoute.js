import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import AddCategoryForm from "../categories/pages/AddCategory/AddCategoryForm";
const AddCategoryRoute = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <SideBar />
            <AddCategoryForm />
        </React.Fragment>
    );
};
export default AddCategoryRoute;
