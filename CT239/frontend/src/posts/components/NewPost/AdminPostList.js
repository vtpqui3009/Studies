import React, { useContext, useState } from "react";
import Button from "../../../shared/components/FormElement/Button";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { AuthContext } from "../../../shared/context/auth-context";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import ReactHtmlParser from "react-html-parser";
import "./AdminPostList.css";
const AdminPostList = (props) => {
    const auth = useContext(AuthContext);
    const publicURL = "http://localhost:5000/";
    const { error, clearError, sendRequest } = useHttpClient();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />

            <div className="post-header">
                <Button primary to="/add-post">
                    <div className="add-btn">
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <span>Thêm bài viết</span>
                    </div>
                </Button>
            </div>
            <div className="post-table">
                <div className="post-table__header">Danh mục bài viết</div>
                <Table striped bordered hover responsive="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Tiêu đề</th>
                            <th>Mô tả</th>
                            <th>Thuộc danh mục</th>
                            <th colSpan="2">Hình ảnh</th>
                            <th>Tác giả</th>
                            <th>Ngày đăng</th>
                            <th>Trạng thái</th>

                            <th colSpan="2">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.postList.map((post) => {
                            return (
                                <tr key={post.id}>
                                    <td className="table-post__id">
                                        {post.id}
                                    </td>
                                    <td className="table-post__title">
                                        {ReactHtmlParser(post.title)}
                                    </td>
                                    <td className="table-post__description">
                                        {ReactHtmlParser(
                                            post.description.substr(0, 50)
                                        )}
                                    </td>
                                    <td className="table-post__category">
                                        {post.category}
                                    </td>
                                    <td colSpan="2">
                                        <img
                                            className="table-post__image"
                                            src={publicURL + post.image}
                                            alt=""
                                        />
                                    </td>
                                    <td className="table-post__author">
                                        {post.author}
                                    </td>
                                    <td>
                                        {new Date(
                                            post.createdAt
                                        ).toLocaleString()}
                                    </td>
                                    <td className="table-post__author">
                                        {post.isApproved}
                                    </td>
                                    <td className="table-post__actions">
                                        <Link to={`post/update/${post.id}`}>
                                            <i className="fa fa-edit update-icon" />
                                        </Link>
                                        {isLoading && (
                                            <LoadingSpinner asOverlay />
                                        )}
                                        <i
                                            className="fa fa-trash-alt delete-icon"
                                            onClick={async () => {
                                                setIsLoading(true);
                                                try {
                                                    await sendRequest(
                                                        "http://localhost:5000/api/posts/delete/" +
                                                            `${post.id}`,
                                                        "DELETE",
                                                        {
                                                            "Content-Type":
                                                                "application/json",
                                                            Authorization:
                                                                "Bearer " +
                                                                auth.token
                                                        }
                                                    );
                                                    props.onDeletePost(post.id);
                                                    setIsLoading(false);
                                                } catch (err) {
                                                    setIsLoading(false);
                                                }
                                            }}
                                        />
                                        {isLoading && (
                                            <LoadingSpinner asOverlay />
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </React.Fragment>
    );
};
export default AdminPostList;
