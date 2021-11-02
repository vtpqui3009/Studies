import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../shared/components/FormElement/Button";
import { useLocation } from "react-router";
import { AuthContext } from "../../../shared/context/auth-context";
import axios from "axios";
import Select from "./Select";
import "./UpdateUser.css";
const UpdateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const history = useHistory();
    const location = useLocation();
    const path = location.pathname.split("/")[3];
    const auth = useContext(AuthContext);
    const [didMount, setDidMount] = useState(false);
    axios.interceptors.request.use(
        (config) => {
            config.headers.Authorization = "Bearer " + auth.token;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(
                "http://localhost:5000/api/users/" + path
            );
            const responseData = await response.data.user;
            setName(responseData.name);
            setEmail(responseData.email);
        };
        fetchUser();
    }, [path]);
    const convertToSlug = (text) => {
        return text
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
    };
    const newRole = convertToSlug(role);
    const categoryUpdateSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            await axios.patch(
                "http://localhost:5000/api/users/update/" + path,
                JSON.stringify({
                    name: name,
                    email: email,
                    role: newRole
                })
            );
        } catch (err) {}
        history.push("/sys-admin");
    };

    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }
    const nameChangedHandler = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
    };
    const emailChangedHandler = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    };
    const roleChangedHandler = (event) => {
        setRole(event.target.value);
        console.log(event.target.value);
    };
    return (
        <form
            onSubmit={categoryUpdateSubmitHandler}
            className="user-form__update"
        >
            <label htmlFor="name">Name :</label>
            <input
                type="text"
                value={name}
                onChange={nameChangedHandler}
                className="user-form__input"
                id="name"
            />
            <label htmlFor="email">Email :</label>
            <input
                type="text"
                value={email}
                onChange={emailChangedHandler}
                className="user-form__input"
                id="email"
            />
            <Select value={role} onChange={roleChangedHandler} />
            <Button type="submit">Cập nhật</Button>
        </form>
    );
};
export default UpdateUser;
