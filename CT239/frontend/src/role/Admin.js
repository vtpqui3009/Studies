import React from "react";
import Auth from "../users/pages/Auth";
import { Route, Redirect } from "react-router-dom";
import Sidebar from "../shared/components/sidebar-nav/SideBar";
import AdminPendingPostPage from "../admin/pages/AdminPendingPostPage";
import AdminPendingCategoryPage from "../admin/pages/AdminPendingCategoryPage";
import ViewPost from "../admin/pages/ViewPost";
import ViewCategory from "../admin/pages/ViewCategory";
import UserInforRoute from "../routes/UserInforRoute";
const Admin = () => {
    return (
        <React.Fragment>
            {" "}
            <Sidebar />
            <Route path="/view-category/:cid" exact>
                <ViewCategory />
            </Route>
            <Route path="/admin" exact>
                <AdminPendingPostPage />
            </Route>
            <Route path="/view-post/:pid" exact>
                <ViewPost />
            </Route>
            <Route path="/admin/pending-category" exact>
                <AdminPendingCategoryPage />
            </Route>
            <Route path="/auth" exact>
                <Auth />
            </Route>
            <Route path="/user-info" exact>
                <UserInforRoute />
            </Route>
            <Redirect to="/admin"></Redirect>
        </React.Fragment>
    );
};
export default Admin;
