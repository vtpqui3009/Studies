import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import AdminLogo from "../components/AdminLogo";
import AdminDashboardAvatar from "../components/AdminDashboardAvatar";
import { useParams } from "react-router";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { StyledAdminHeading } from "../components/GlobalAdminStyled";
import "./ViewPost.css";

const ViewCategory = () => {
    const { cid } = useParams();
    const [loadedCategories, setLoadedCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [isApproved, setIsApproved] = useState("");
    const [didMount, setDidMount] = useState(false);
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                setIsLoading(true);
                const reponse = axios.get(
                    "http://localhost:5000/api/category/" + cid
                );
                const responseData = (await reponse).data.category;
                setLoadedCategories(responseData);
                setName(responseData.name);
                setCreatedAt(responseData.createdAt);
                setIsApproved(responseData.isApproved);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        };
        fetchCategory();
    }, [cid]);
    const nameChangedHandler = () => {};
    const createdAtChangedHandler = () => {};
    const statusChangedHandler = () => {};
    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }
    return (
        <div className="admin">
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
                            <ion-icon name="notifications-outline"></ion-icon>
                        </div>
                        <AdminDashboardAvatar />
                    </div>
                </div>
                {isLoading && <LoadingSpinner asOverlay />}
                <StyledAdminHeading>Danh m???c b??i vi???t</StyledAdminHeading>
                {loadedCategories && (
                    <div
                        className="admin-dashboard__view-form"
                        key={loadedCategories.id}
                    >
                        <div className="admin-dashboard__view-item">
                            <span>T??n danh m???c : </span>
                            <input
                                value={ReactHtmlParser(name)}
                                onChange={nameChangedHandler}
                            />
                        </div>
                        <div className="admin-dashboard__view-item">
                            <span>Ng??y t???o : </span>
                            <input
                                value={new Date(createdAt).toLocaleString()}
                                onChange={createdAtChangedHandler}
                            />
                        </div>
                        <div className="admin-dashboard__view-item">
                            <span>Tr???ng th??i: </span>
                            <input
                                value={isApproved}
                                onChange={statusChangedHandler}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default ViewCategory;
