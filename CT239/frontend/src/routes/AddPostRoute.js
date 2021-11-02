import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import AddPostForm from "../posts/pages/AddPost/AddPostForm";
const AddPostRoute = () => {
    return (
        <React.Fragment>
            <MainNavigation />
            <SideBar />
            <AddPostForm />
        </React.Fragment>
    );
};
export default AddPostRoute;
