import React from "react";
import Auth from "../users/pages/Auth";
import { Route, Redirect } from "react-router-dom";
import Sidebar from "../shared/components/sidebar-nav/SideBar";
import AdminSystemPage from "../sys-admin/pages/AdminSystemPage";
import AdminPendingCategoryPage from "../admin/components/AdminPendingCategoryPage";
import ViewPost from "../admin/pages/ViewPost";
import ViewCategory from "../admin/pages/ViewCategory";
const Admin = () => {
    return (
        <React.Fragment>
            {" "}
            <Route path="/view-category/:cid" exact>
                <ViewCategory />
            </Route>
            <Route path="/admin" exact>
                <AdminSystemPage />
            </Route>
            <Sidebar />
            <Route path="/view-post/:pid" exact>
                <ViewPost />
            </Route>
            <Route path="/admin/pending-category" exact>
                <AdminPendingCategoryPage />
            </Route>
            <Route path="/auth" exact>
                <Auth />
            </Route>
            <Redirect to="/admin"></Redirect>
        </React.Fragment>
    );
};
export default Admin;
