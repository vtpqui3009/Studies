import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./AddCategoryForm.css";
import Button from "../../../shared/components/FormElement/Button";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { AuthContext } from "../../../shared/context/auth-context";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
// import axios from "axios";

const AddCategoryForm = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [categoryName, setCategoryName] = useState("");
    const auth = useContext(AuthContext);
    const history = useHistory();
    const postSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            await sendRequest(
                "http://localhost:5000/api/category/add-category",
                "POST",
                {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + auth.token
                },
                JSON.stringify({
                    name: categoryName
                }),
                {
                    Authorization: "Bearer " + auth.token
                }
            );
            history.push("/manage-category");
        } catch (err) {}
    };
    const categoryNameChangedHandler = (event) => {
        setCategoryName(event.target.value);
    };
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <form className="add-category__form" onSubmit={postSubmitHandler}>
                {isLoading && <LoadingSpinner asOverlay />}
                <p>Thêm danh mục bài viết</p>
                <input
                    type="text"
                    id="name"
                    value={categoryName}
                    onChange={categoryNameChangedHandler}
                />
                <Button type="submit">Thêm danh mục</Button>
            </form>
        </React.Fragment>
    );
};
export default AddCategoryForm;
