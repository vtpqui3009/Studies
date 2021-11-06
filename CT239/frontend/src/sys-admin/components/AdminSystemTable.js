import React, { useState, useContext } from "react";
import AdminDashboardTableItem from "../../admin/components/AdminDashboardTableItem";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
const AdminSystemTable = (props) => {
    const { sendRequest } = useHttpClient();
    const [isLoading, setIsloading] = useState(false);
    const auth = useContext(AuthContext);
    return (
        <React.Fragment>
            {" "}
            {isLoading && <LoadingSpinner asOverlay />}
            <div className="admin-dashboard__table">
                <div className="admin-dashboard__table-heading">
                    <AdminDashboardTableItem text="Id" />
                    <AdminDashboardTableItem text="Tiêu đề" />
                    <AdminDashboardTableItem text="Mô tả" />
                    <AdminDashboardTableItem text="Nội dung" />
                    <AdminDashboardTableItem text="Trạng thái" />
                    <AdminDashboardTableItem text="Xem" />
                    <AdminDashboardTableItem text="Duyệt" />
                    <AdminDashboardTableItem text="Xóa" />
                </div>

                {props.posts &&
                    props.posts.map((post) => {
                        return (
                            <div
                                className="admin-dashboard__table-content"
                                key={post.id}
                            >
                                <AdminDashboardTableItem
                                    text={post.id.substr(0, 8)}
                                />
                                <AdminDashboardTableItem
                                    text={ReactHtmlParser(
                                        post.title.slice(0, 30)
                                    )}
                                />
                                <AdminDashboardTableItem
                                    text={ReactHtmlParser(
                                        post.description.slice(0, 100)
                                    )}
                                />
                                <AdminDashboardTableItem
                                    text={ReactHtmlParser(
                                        post.content.slice(0, 100)
                                    )}
                                />
                                <AdminDashboardTableItem
                                    text={post.isApproved}
                                />
                                <AdminDashboardTableItem
                                    text={
                                        <Link to={`view-post/${post.id}`}>
                                            <ion-icon
                                                name="eye-outline"
                                                style={{
                                                    color: "blue",
                                                    fontSize: "18px",
                                                    pointerEvent: "none"
                                                }}
                                            ></ion-icon>
                                        </Link>
                                    }
                                />
                                <AdminDashboardTableItem
                                    text={
                                        <ion-icon
                                            name="checkmark-outline"
                                            style={{
                                                color: "green",
                                                fontSize: "18px",
                                                pointerEvent: "none"
                                            }}
                                        ></ion-icon>
                                    }
                                    onClick={async () => {
                                        if (post.isApproved !== "Approved") {
                                            post.isApproved = "Approved";
                                        }
                                        setIsloading(true);
                                        try {
                                            await sendRequest(
                                                "http://localhost:5000/api/posts/update/status/" +
                                                    post.id,
                                                "PATCH",
                                                {
                                                    "Content-Type":
                                                        "application/json",
                                                    Authorization:
                                                        "Bearer " + auth.token
                                                },
                                                JSON.stringify({
                                                    isApproved: post.isApproved
                                                })
                                            );
                                            setIsloading(false);
                                        } catch (err) {}
                                    }}
                                />{" "}
                                <AdminDashboardTableItem
                                    text={
                                        <ion-icon
                                            name="close-outline"
                                            style={{
                                                color: "red",
                                                fontSize: "18px",
                                                pointerEvent: "none"
                                            }}
                                        ></ion-icon>
                                    }
                                    onClick={async () => {
                                        setIsloading(true);
                                        try {
                                            await sendRequest(
                                                "http://localhost:5000/api/posts/delete/" +
                                                    post.id,
                                                "DELETE",
                                                {
                                                    "Content-Type":
                                                        "application/json",
                                                    Authorization:
                                                        "Bearer " + auth.token
                                                }
                                            );
                                            setIsloading(false);
                                        } catch (err) {}
                                        props.onDeletePost(post.id);
                                    }}
                                />{" "}
                                {isLoading && <LoadingSpinner asOverlay />}
                            </div>
                        );
                    })}
            </div>
        </React.Fragment>
    );
};
export default AdminSystemTable;
