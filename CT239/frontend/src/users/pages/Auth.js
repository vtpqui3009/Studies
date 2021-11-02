import React, { useState, useContext, useEffect } from "react";
import Input from "../../shared/components/FormElement/Input";
import Button from "../../shared/components/FormElement/Button";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./Auth.css";
import ImageUpload from "../../shared/components/FormElement/ImageUpload";
const Auth = () => {
    const auth = useContext(AuthContext);
    const [didMount, setDidMount] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: "",
                isValid: false
            },
            password: {
                value: "",
                isValid: false
            }
        },
        false
    );
    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined,
                    image: undefined
                },
                formState.inputs.email.isValid &&
                    formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: "",
                        isValid: false
                    },
                    image: {
                        value: null,
                        isValid: false
                    }
                },
                false
            );
        }
        setIsLoginMode((prevMode) => !prevMode);
    };
    const authSubmitHandler = async (event) => {
        event.preventDefault();
        if (isLoginMode) {
            try {
                const responseData = await sendRequest(
                    "http://localhost:5000/api/users/sign-in",
                    "POST",
                    { "Content-Type": "application/json" },
                    JSON.stringify({
                        email: formState.inputs.email.value,
                        password: formState.inputs.password.value
                    })
                );
                auth.login(responseData.userId, responseData.token);
            } catch (err) {}
        } else {
            try {
                const formData = new FormData();
                formData.append("email", formState.inputs.email.value);
                formData.append("username", formState.inputs.username.value);
                formData.append("name", formState.inputs.name.value);
                formData.append("password", formState.inputs.password.value);
                formData.append("image", formState.inputs.image.value);
                const responseData = await sendRequest(
                    "http://localhost:5000/api/users/sign-up",
                    "POST",
                    {},
                    formData
                );
                auth.login(responseData.userId, responseData.token);
            } catch (err) {}
        }
    };
    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }
    return (
        <div className="container">
            <ErrorModal error={error} onClear={clearError} />
            <div className="form">
                {isLoading && <LoadingSpinner asOverlay />}
                <span className="form-title">Welcome</span>
                <form onSubmit={authSubmitHandler} className="form-control">
                    {!isLoginMode && (
                        <React.Fragment>
                            <ImageUpload
                                center
                                id="image"
                                onInput={inputHandler}
                                width="100px"
                                height="100px"
                                borderRadius="50%"
                            />
                            <Input
                                element="input"
                                id="name"
                                type="text"
                                placeholder="Họ tên"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Họ tên không được để trống."
                                onInput={inputHandler}
                            />
                            <Input
                                element="input"
                                id="username"
                                type="text"
                                placeholder="Username"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorText="Username không được để trống."
                                onInput={inputHandler}
                            />
                        </React.Fragment>
                    )}

                    <Input
                        element="input"
                        id="email"
                        type="email"
                        placeholder="Email"
                        validators={[VALIDATOR_EMAIL()]}
                        errorText="Email phải đúng định dạng."
                        onInput={inputHandler}
                    />
                    <Input
                        element="input"
                        id="password"
                        type="password"
                        placeholder="Password"
                        validators={[VALIDATOR_MINLENGTH(6)]}
                        errorText="Mật khẩu yêu cầu tối thiểu 8 kí tự."
                        onInput={inputHandler}
                    />
                    <Button
                        type="submit"
                        disabled={!formState.isValid}
                        className="centered"
                    >
                        {isLoginMode ? "Đăng nhập" : "Đăng ký"}
                    </Button>
                </form>
                <button className="button--origin" onClick={switchModeHandler}>
                    {isLoginMode
                        ? "Chưa có tài khoản ? Đăng ký ngay"
                        : "Đã có tài khoản ? Đăng nhập"}
                </button>
            </div>
        </div>
    );
};
export default Auth;
