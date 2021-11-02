import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "./shared/context/auth-context";
import Author from "./role/Author";
import AdminSystem from "./role/AdminSystem";
import Admin from "./role/Admin";
import NormalUser from "./role/NormalUser";
import { useAuth } from "./shared/hooks/auth-hook";
import axios from "axios";

const App = () => {
    const { token, userId, login, logout } = useAuth();
    const [role, setRole] = useState("");
    const [didMount, setDidMount] = useState(false);
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(
                "http://localhost:5000/api/users/" + userId
            );
            const responseData = await response.data;
            setRole(responseData.user.role);
        };
        fetchUser();
    }, [userId]);
    let routes;
    if (token) {
        if (role === "author") {
            routes = <Author />;
        }
        if (role === "admin") {
            routes = <Admin />;
        }
        if (role === "admin-system") {
            routes = <AdminSystem />;
        }
    } else {
        routes = <NormalUser />;
    }
    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                userId: userId,
                login: login,
                logout: logout,
                role: role
            }}
        >
            <Router>
                <Switch>{routes}</Switch>
            </Router>
        </AuthContext.Provider>
    );
};
export default App;
