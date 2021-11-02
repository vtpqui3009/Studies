import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../../shared/components/FormElement/Input";
import Button from "../../../shared/components/FormElement/Button";
import { useLocation } from "react-router";
import "./UpdateCategory.css";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { useForm } from "../../../shared/hooks/form-hook";
import { AuthContext } from "../../../shared/context/auth-context";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import { VALIDATOR_REQUIRE } from "../../../shared/util/validators";
const UpdateCategory = () => {
    const { error, sendRequest, clearError } = useHttpClient();
    const [loadedCategory, setLoadedCategory] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const path = location.pathname.split("/")[3];
    const auth = useContext(AuthContext);
    const [formState, inputHandler, setFormData] = useForm(
        {
            name: {
                value: "",
                isValid: false
            }
        },
        false
    );
    useEffect(() => {
        const fetchCategory = async () => {
            setIsLoading(true);
            try {
                const responseData = await sendRequest(
                    `http://localhost:5000/api/category/` + path
                );
                setLoadedCategory(responseData.category);
                setFormData(
                    {
                        name: {
                            value: responseData.category.name,
                            isValid: true
                        }
                    },
                    true
                );
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        };
        fetchCategory();
    }, [sendRequest, path, setFormData]);

    const categoryUpdateSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            await sendRequest(
                "http://localhost:5000/api/category/update/" + path,
                "PATCH",
                {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + auth.token
                },
                JSON.stringify({
                    name: formState.inputs.name.value
                })
            );
        } catch (err) {}
        history.push("/manage-category");
    };
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && <LoadingSpinner asOverlay />}
            <form
                onSubmit={categoryUpdateSubmitHandler}
                className="category-form__update"
            >
                <p className="category-form__update-title">
                    Cập nhật danh mục bài viết
                </p>

                {loadedCategory && (
                    <Input
                        element="input"
                        type="text"
                        id="name"
                        label="Tên danh mục : "
                        errorText="Please enter a valid name."
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        initialValue={loadedCategory.name}
                        initialValid={true}
                    />
                )}
                <Button type="submit">Cập nhật</Button>
                {isLoading && <LoadingSpinner asOverlay />}
            </form>
        </React.Fragment>
    );
};
export default UpdateCategory;
