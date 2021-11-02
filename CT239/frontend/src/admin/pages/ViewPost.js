import React, { useState, useEffect } from "react";
import AdminSystemSidebar from "../../sys-admin/components/AdminSystemSidebar";
import AdminLogo from "../components/AdminLogo";
import AdminDashboardAvatar from "../components/AdminDashboardAvatar";
import { useParams } from "react-router";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import "./ViewPost.css";

const ViewPost = () => {
    const { pid } = useParams();
    const [loadedPost, setloadedPost] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [isApproved, setIsApproved] = useState("");
    const [didMount, setDidMount] = useState(false);
    useEffect(() => {
        const fetchSinglePost = async () => {
            setIsloading(true);
            try {
                const reponse = axios.get(
                    "http://localhost:5000/api/posts/" + pid
                );
                const responseData = (await reponse).data.post;
                setloadedPost(responseData);
                setTitle(responseData.title);
                setDescription(responseData.description);
                setContent(responseData.content);
                setIsApproved(responseData.isApproved);
                setIsloading(false);
            } catch (err) {}
        };
        fetchSinglePost();
    }, [pid]);
    const titleChangedHandler = () => {};
    const descriptionChangedHandler = () => {};
    const contentChangedHandler = () => {};
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
                {loadedPost && (
                    <div
                        className="admin-dashboard__view-form"
                        key={loadedPost.id}
                    >
                        <div className="admin-dashboard__view-item">
                            <span>Tiêu đề : </span>
                            <textarea
                                value={ReactHtmlParser(title)}
                                onChange={titleChangedHandler}
                            />
                        </div>
                        <div className="admin-dashboard__view-item">
                            <span>Mô tả : </span>
                            <CKEditor
                                data={description}
                                editor={ClassicEditor}
                                onChange={descriptionChangedHandler}
                            />
                        </div>
                        <div className="admin-dashboard__view-item">
                            <span>Nội dung: </span>
                            <CKEditor
                                data={content}
                                editor={ClassicEditor}
                                onChange={contentChangedHandler}
                            />
                        </div>
                        <div className="admin-dashboard__view-item">
                            <span>Trạng thái: </span>
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
export default ViewPost;
