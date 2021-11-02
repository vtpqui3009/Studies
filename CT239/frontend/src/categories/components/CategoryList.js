import React, { useContext, useState } from "react";
import Button from "../../shared/components/FormElement/Button";
import { Table } from "react-bootstrap";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { Link } from "react-router-dom";
import "./CategoryList.css";
import "../../shared/css/table.css";
const CategoryList = (props) => {
    const { sendRequest } = useHttpClient();
    const [isLoading, setIsLoading] = useState(false);
    const auth = useContext(AuthContext);
    return (
        <React.Fragment>
            <div className="category-header">
                <Button primary to="/add-category">
                    <div className="add-btn">
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <span>Thêm danh mục</span>
                    </div>
                </Button>
            </div>
            <div className="category-table">
                <div className="category-table__header">Danh mục bài viết</div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Tên danh mục</th>
                            <th>Ngày tạo</th>
                            <th>Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.categoryList.map((categories) => {
                            return (
                                <tr key={categories.id}>
                                    <td>{categories.id}</td>
                                    <td>{categories.name}</td>
                                    <td className="actions">
                                        {new Date(
                                            categories.createdAt
                                        ).toLocaleString()}
                                    </td>
                                    <td>
                                        <Link
                                            to={`/category/update/${categories.id}`}
                                        >
                                            <i className="fa fa-edit update-icon" />
                                        </Link>
                                        <i
                                            className="fa fa-trash-alt delete-icon"
                                            onClick={async () => {
                                                try {
                                                    setIsLoading(true);
                                                    await sendRequest(
                                                        "http://localhost:5000/api/category/delete/" +
                                                            `${categories.id}`,
                                                        "DELETE",
                                                        {
                                                            "Content-Type":
                                                                "application/json",
                                                            Authorization:
                                                                "Bearer " +
                                                                auth.token
                                                        }
                                                    );
                                                    props.onDeleteCategory(
                                                        categories.id
                                                    );
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
export default CategoryList;
