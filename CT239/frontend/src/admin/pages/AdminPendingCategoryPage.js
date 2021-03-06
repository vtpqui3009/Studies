import React, { useState, useEffect } from "react";
import AdminDashboardGrid from "../components/AdminDashboardGrid";
import AdminSidebar from "../components/AdminSidebar";
import AdminLogo from "../components/AdminLogo";
import AdminDashboardAvatar from "../components/AdminDashboardAvatar";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import CategoryDataTable from "../components/admin-category-item/CategoryDataTable";
import { StyledAdminTable } from "../components/GlobalAdminStyled";
import axios from "axios";
const AdminPendingCategoryPage = () => {
    const [isLoading, setIsloading] = useState(false);
    const [loadedCategories, setLoadedCategories] = useState([]);
    const [failedNumber] = useState(0);
    const [openNoti, setOpenNoti] = useState(false);
    useEffect(() => {
        const fetchUsers = async () => {
            setIsloading(true);
            const response = await axios.get(
                "http://localhost:5000/api/category/all-category"
            );
            const reponseData = await response.data.category;
            setLoadedCategories(reponseData);
            setIsloading(false);
        };
        fetchUsers();
    }, []);
    let filterApprovedCategory = loadedCategories.filter(
        (categories) => categories.isApproved === "Approved"
    );
    let filterUnApprovedCategory = loadedCategories.filter(
        (categories) => categories.isApproved !== "Approved"
    );
    let successNumber = filterApprovedCategory.length;
    let pendingNumber = filterUnApprovedCategory.length;
    const notiHanler = () => {
        setOpenNoti(true);
    };
    const closeNotiPanelHandler = () => {
        setOpenNoti(false);
    };
    return (
        <div className="admin">
            {isLoading && <LoadingSpinner asOverlay />}
            <AdminSidebar />
            <div className="admin-dashboard">
                <div className="admin-dashboard__heading">
                    <AdminLogo chilren="Dashboard" />
                    <div className="admin-dashboard__more">
                        <div className="admin-dashboard__search">
                            <input type="text" />
                            <ion-icon name="search-outline"></ion-icon>
                        </div>
                        <div className="admin-dashboard__notification">
                            {pendingNumber > 0 && (
                                <div className="badge">{pendingNumber}</div>
                            )}
                            <ion-icon
                                class="noti-icon"
                                name="notifications-outline"
                                onClick={notiHanler}
                            ></ion-icon>

                            {openNoti && (
                                <React.Fragment>
                                    <div className="noti-panel">
                                        <div className="noti-item">
                                            {pendingNumber ? (
                                                <span>
                                                    B???n c?? {pendingNumber} danh
                                                    m???c b??i vi???t ch??a duy???t
                                                </span>
                                            ) : (
                                                <span>
                                                    Kh??ng c?? th??ng b??o n??o
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className="noti-backdrop"
                                        onClick={closeNotiPanelHandler}
                                    ></div>
                                </React.Fragment>
                            )}
                        </div>
                        <AdminDashboardAvatar />
                    </div>
                </div>
                <AdminDashboardGrid
                    successNumber={successNumber}
                    successText="Danh m???c b??i vi???t ???? duy???t"
                    pendingNumber={pendingNumber}
                    pendingText="Danh m???c b??i vi???t ch??a duy???t"
                    failedNumber={failedNumber}
                    failedText="Danh m???c b??i vi???t ???? x??a"
                />
                <StyledAdminTable>
                    <CategoryDataTable />
                </StyledAdminTable>
            </div>
        </div>
    );
};
export default AdminPendingCategoryPage;
