import React from "react";
import AdminSystemDataTable from "../components/admin-item/AdminSystemDataTable";
import AdminGretting from "../../admin/components/AdminGretting";
import {
    StyledAdminSystemTable,
    StyledAdminSystemContainer
} from "../components/GlobalStyledAdminSystem";
import "../../admin/components/AdminPage.css";
import "./AdminSystemPage.css";
import AdminSystemLayout from "../components/AdminSystemLayout";
const AdminSystemPage = () => {
    return (
        <React.Fragment>
            <AdminSystemLayout />
            <StyledAdminSystemContainer>
                <AdminGretting />
                <StyledAdminSystemTable>
                    <AdminSystemDataTable />
                </StyledAdminSystemTable>
            </StyledAdminSystemContainer>
        </React.Fragment>
    );
};
export default AdminSystemPage;
