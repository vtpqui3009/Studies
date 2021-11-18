import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./news-logo.png";
import { AuthContext } from "../../context/auth-context";
import SearchBar from "../FormElement/SearchBar";
import axios from "axios";
import { Navbar, Row, Col } from "react-bootstrap";
import BarIcon from "./BarIcon";
import LoginButton from "../FormElement/LoginButton";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";
const MainNavigation = (props) => {
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
            <div className="main-navigation-more">
                <div className="notification"> {props.noti}</div>
                <div className="auth-shortcut">
                    <img
                        src={publicURL + loadedAvatar}
                        alt="avt"
                        onClick={openMenuDropdown}
                        width="50"
                        height="50"
                        style={{ borderRadius: "50%" }}
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
                                        textDecoration: "none",
                                        color: "black"
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
            </div>
        );
    } else {
        avatar = <LoginButton />;
    }
    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }
    return (
        <MainHeader className="main-header">
            <Row
                style={{
                    width: "100%"
                }}
                className="align-items-center"
            >
                <Col lg={3} md={3} sm={3}>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo" width="200" />
                    </Navbar.Brand>
                </Col>
                <Col
                    lg={{ span: 4, offset: 1 }}
                    md={{ span: 4, offset: 1 }}
                    sm={{ span: 4, offset: 1 }}
                >
                    <SearchBar />
                </Col>
                <Col
                    // className="ms-auto"
                    lg={{ span: 2, offset: 2 }}
                    md={{ span: 2, offset: 2 }}
                    sm={{ span: 2, offset: 2 }}
                >
                    <Row className="align-items-center">
                        <Col>
                            {["end"].map((placement, idx) => (
                                <BarIcon
                                    key={idx}
                                    placement={placement}
                                    name={placement}
                                />
                            ))}
                        </Col>
                        <Col
                            className="ms-auto d-none d-xl-block"
                            md={6}
                            sm={6}
                        >
                            <BarIcon />
                        </Col>
                        <Col md={6} sm={6}>
                            {" "}
                            {avatar}{" "}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </MainHeader>
    );
};
export default MainNavigation;
