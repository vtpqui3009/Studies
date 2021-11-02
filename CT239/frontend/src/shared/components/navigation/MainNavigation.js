import React, { Fragment, useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import MainHeader from "./MainHeader";
import logo from "./news-logo.png";
import { AuthContext } from "../../context/auth-context";
import SearchBar from "../FormElement/SearchBar";
import axios from "axios";
import "./MainNavigation.css";
const MainNavigation = () => {
    const [didMount, setDidMount] = useState(false);
    const auth = useContext(AuthContext);
    const [backdrop, openBackdrop] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const userData = JSON.parse(localStorage.getItem("userData"));
    const [loadedAvatar, setLoadedAvatar] = useState("");
    const publicURL = "http://localhost:5000/";
    const openMenuDropdown = () => {
        setOpenMenu(true);
        openBackdrop(true);
    };
    const closeBackdrop = () => {
        openBackdrop(false);
        setOpenMenu(false);
    };
    let avatar;
    if (auth.isLoggedIn) {
        const fetchAvatar = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/users/" + userData.userId
                );
                const responseData = await response.data.user.avatar;
                setLoadedAvatar(responseData);
            } catch (err) {}
        };
        fetchAvatar();
        avatar = (
            <React.Fragment>
                <div className="auth-shortcut">
                    <img
                        className="image-information"
                        src={publicURL + loadedAvatar}
                        alt="avt"
                        onClick={openMenuDropdown}
                    />
                    {backdrop && (
                        <div
                            className="info-backdrop"
                            onClick={closeBackdrop}
                        ></div>
                    )}

                    {openMenu && (
                        <div className="dropdown-menu">
                            <div className="dropdown-menu__item">
                                <Link to="/user-info">Thông tin cá nhân</Link>
                            </div>
                            <div
                                className="dropdown-menu__item"
                                onClick={auth.logout}
                            >
                                Đăng xuất
                            </div>
                        </div>
                    )}
                </div>
            </React.Fragment>
        );
    } else {
        avatar = (
            <NavLink to="/auth">
                <button className="main-navigation__login-btn">Login</button>
            </NavLink>
        );
    }
    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }
    return (
        <Fragment>
            <MainHeader>
                <div className="main-navigation__logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <SearchBar />
                {avatar}
            </MainHeader>
        </Fragment>
    );
};
export default MainNavigation;
