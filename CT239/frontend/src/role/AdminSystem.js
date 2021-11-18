import React from "react";
import SideBar from "../shared/components/sidebar-nav/SideBar";
import Auth from "../users/pages/Auth";
import { Route, Redirect } from "react-router-dom";
import AdminUpdateUserRoute from "../routes/AdminUpdateUserRoute";
import AdminSystemPage from "../sys-admin/pages/AdminSystemPage";
import UserInforRoute from "../routes/UserInforRoute";
import AddUserRoute from "../routes/AddUserRoute";
const AdminSystem = () => {
    return (
        <React.Fragment>
            <SideBar />
            <Route path="/new-user" exact>
                <AddUserRoute />
            </Route>
            <Route path="/sys-admin" exact>
                <AdminSystemPage />
            </Route>
            <Route path="/update/user/:uid" exact>
                <AdminUpdateUserRoute />
            </Route>
            <Route path="/auth" exact>
                <Auth />
            </Route>
            <Route path="/user-info" exact>
                <UserInforRoute />
            </Route>
            <Redirect to="/sys-admin" />
        </React.Fragment>
    );
};
export default AdminSystem;
