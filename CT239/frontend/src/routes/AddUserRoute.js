import React from "react";
import NewUser from "../sys-admin/pages/NewUser";
import AdminSystemLayout from "../sys-admin/components/AdminSystemLayout";
import "../admin/components/AdminPage.css";
const AddUserRoute = () => {
    return (
        <React.Fragment>
            <AdminSystemLayout />
            <NewUser />
        </React.Fragment>
    );
};
export default AddUserRoute;
