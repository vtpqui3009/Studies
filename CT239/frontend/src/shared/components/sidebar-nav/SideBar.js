import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import MenuToogleAuthor from "./MenuToogleAuthor";
import MenuToogleAdminSystem from "./MenuToogleAdminSystem";
import MenuToogleAdmin from "./MenuToogleAdmin";
import "./SideBar.css";
const SideBar = () => {
    const auth = useContext(AuthContext);

    let items;
    if (auth.isLoggedIn && auth.role === "author") {
        items = <MenuToogleAuthor />;
    }
    if (auth.isLoggedIn && auth.role === "admin") {
        items = <MenuToogleAdmin />;
    }
    if (auth.isLoggedIn && auth.role === "admin-system") {
        items = <MenuToogleAdminSystem />;
    }
    return <ul className="sidebar">{items}</ul>;
};
export default SideBar;
