import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../shared/context/auth-context";
import { Link } from "react-router-dom";
const AdminDashboardAvatar = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const auth = useContext(AuthContext);
    const publicURL = "http://localhost:5000/";
    const [didMount, setDidMount] = useState(false);
    const [loadedAvatar, setLoadedAvatar] = useState("");
    const [backdrop, openBackdrop] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
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
                        <div className="dropdown-menu__modal">
                            <div className="dropdown-menu__item">
                                <Link
                                    to="/user-info"
                                    style={{
                                        color: "black",
                                        textDecoration: "none"
                                    }}
                                >
                                    Thông tin cá nhân
                                </Link>
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
    }
    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }
    return <div className="admin-dashboard__avatar">{avatar}</div>;
};
export default AdminDashboardAvatar;
