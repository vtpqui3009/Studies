import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import { AuthContext } from "../../../shared/context/auth-context";
import Button from "../../../shared/components/FormElement/Button";
import {
    StyledUpdateUserForm,
    StyledUpdateUserFormInput,
    StyledAdminSystemHeading,
    StyledUpdateUserFormContainer
} from "../../components/GlobalStyledAdminSystem";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import Select from "./Select";
import axios from "axios";
const UpdateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const history = useHistory();
    const location = useLocation();
    const path = location.pathname.split("/")[3];
    const auth = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const convertToSlug = (text) => {
        return text
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
    };
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    "http://localhost:5000/api/users/" + path
                );
                const responseData = await response.data.user;
                setName(responseData.name);
                setEmail(responseData.email);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, [path]);
    const nameChangedHandler = (event) => {
        setName(event.target.value);
    };
    const emailChangedHandler = (event) => {
        setEmail(event.target.value);
    };
    const roleChangedHandler = (event) => {
        setRole(event.target.value);
    };
    const categoryUpdateSubmitHandler = async (event) => {
        event.preventDefault();
        const config = {
            headers: { Authorization: "Bearer " + auth.token },
            "Content-Type": "application/json"
        };
        try {
            setIsLoading(true);
            await axios.patch(
                "http://localhost:5000/api/users/update/" + path,
                JSON.stringify({
                    name: name,
                    email: email,
                    role: convertToSlug(role)
                }),
                config
            );
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
        }
        history.push("/sys-admin");
    };
    return (
        <StyledUpdateUserFormContainer>
            {isLoading && <LoadingSpinner asOverlay />}
            <StyledAdminSystemHeading
                style={{ marginLeft: "200px", display: "block" }}
            >
                Cập nhật thông tin người dùng
            </StyledAdminSystemHeading>
            <StyledUpdateUserForm onSubmit={categoryUpdateSubmitHandler}>
                <label htmlFor="name">Name :</label>
                <StyledUpdateUserFormInput
                    type="text"
                    value={name}
                    onChange={nameChangedHandler}
                    id="name"
                />
                <label htmlFor="email">Email :</label>
                <StyledUpdateUserFormInput
                    type="text"
                    value={email}
                    onChange={emailChangedHandler}
                    id="email"
                />
                <Select value={role} onChange={roleChangedHandler} />
                <Button type="submit">Cập nhật</Button>
            </StyledUpdateUserForm>
        </StyledUpdateUserFormContainer>
    );
};
export default UpdateUser;
