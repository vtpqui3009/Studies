import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import axios from "axios";
import "./AdminGreeting.css";
const AdminGreeting = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const auth = useContext(AuthContext);
    const [loadedUsername, setUsername] = useState("");
    const [didMount, setDidMount] = useState(false);
    if (auth.isLoggedIn) {
        const fetchUsername = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/users/" + userData.userId
                );
                const responseData = await response.data.user;
                setUsername(responseData);
            } catch (err) {}
        };
        fetchUsername();
    }
    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }
    return (
        <div className="admin-greeting">
            <div className="admin-greeting__caption">{`Welcome back ${loadedUsername.name}.`}</div>
            <div className="admin-greeting__content">
                We hope you have a peaceful day.
            </div>
        </div>
    );
};
export default AdminGreeting;
