import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import Auth from "../users/pages/Auth";
import { Route, Redirect } from "react-router-dom";
import AdminPendingPostPage from "../admin/components/AdminPendingPostPage";
import AdminUpdateUserRoute from "../routes/AdminUpdateUserRoute";
const AdminSystem = () => {
    return (
        <React.Fragment>
            <SideBar />
            <Route path="/sys-admin" exact>
                <AdminPendingPostPage />
            </Route>
            <Route path="/update/user/:uid" exact>
                <AdminUpdateUserRoute />
            </Route>
            <Route path="/auth" exact>
                <Auth />
            </Route>
            <Redirect to="/sys-admin" />
        </React.Fragment>
    );
};
export default AdminSystem;
