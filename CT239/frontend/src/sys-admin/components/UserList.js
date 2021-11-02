import React, { useState, useContext } from "react";
import { Table } from "react-bootstrap";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { AuthContext } from "../../shared/context/auth-context";
import { Link } from "react-router-dom";
import "./UserList.css";
import "../../shared/css/table.css";
const UsersList = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const { error, clearError, sendRequest } = useHttpClient();
    const auth = useContext(AuthContext);
    return (
        <div className="user-table">
            <ErrorModal error={error} onClear={clearError} />
            <div className="user-table__header">Danh sách User</div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {props.userList.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td className="table-post__actions">
                                    <Link to={`user/update/${user.id}`}>
                                        <i className="fa fa-edit update-icon" />
                                    </Link>
                                    {isLoading && <LoadingSpinner asOverlay />}
                                    <i
                                        className="fa fa-trash-alt delete-icon"
                                        onClick={async () => {
                                            setIsLoading(true);
                                            try {
                                                await sendRequest(
                                                    "http://localhost:5000/api/posts/delete/" +
                                                        `${user.id}`,
                                                    "DELETE",
                                                    {
                                                        "Content-Type":
                                                            "application/json",
                                                        Authorization:
                                                            "Bearer " +
                                                            auth.token
                                                    }
                                                );
                                                props.onDeletePost(user.id);
                                                setIsLoading(false);
                                            } catch (err) {}
                                        }}
                                    />
                                    {isLoading && <LoadingSpinner asOverlay />}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default UsersList;
