import React, { useContext, useState } from "react";
import AdminLogo from "../../admin/components/AdminLogo";
// import AdminDashboardGrid from "../../admin/components/AdminDashboardGrid";
import AdminSystemTable from "../components/AdminSystemTable";
import AdminDashboardAvatar from "../../admin/components/AdminDashboardAvatar";
import AdminSystemSidebar from "../components/AdminSystemSidebar";
import { AuthContext } from "../../shared/context/auth-context";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import axios from "axios";
const AdminSystemPage = () => {
    const auth = useContext(AuthContext);
    const [isLoading, setIsloading] = useState(false);
    axios.interceptors.request.use(
        (config) => {
            config.headers.Authorization = "Bearer " + auth.token;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    const approvedPostHandler = async (id, isApproved, nextStatus) => {
        if (isApproved !== nextStatus || isApproved === "") {
            isApproved = "Approved";
            console.log(isApproved);
            setIsloading(true);
            try {
                await axios.patch(
                    "http://localhost:5000/api/posts/update/status/" + id,
                    { isApproved },
                    {
                        headers: {
                            Authorization: "Bearer " + auth.token
                        }
                    }
                );
                setIsloading(false);
            } catch (err) {}
        }
    };

    const deletePostHandler = async (id) => {
        setIsloading(true);
        try {
            await axios.delete("http://localhost:5000/api/posts/delete/" + id, {
                headers: {
                    Authorization: "Bearer " + auth.token
                }
            });
            setIsloading(false);
        } catch (err) {}
    };
    return (
        <div className="admin">
            <AdminSystemSidebar />
            <div className="admin-dashboard">
                <div className="admin-dashboard__heading">
                    <AdminLogo chilren="Dashboard" />
                    <div className="admin-dashboard__more">
                        <div className="admin-dashboard__search">
                            <input type="text" />
                            <ion-icon name="search-outline"></ion-icon>
                        </div>
                        <div className="admin-dashboard__notification">
                            <ion-icon name="notifications-outline"></ion-icon>
                        </div>
                        <AdminDashboardAvatar />
                    </div>
                </div>

                {isLoading && <LoadingSpinner asOverlay />}
                <AdminSystemTable
                    onApproveHandler={approvedPostHandler}
                    onDelete={deletePostHandler}
                />
            </div>
        </div>
    );
};
export default AdminSystemPage;
