import React, { useState } from "react";
import { Link } from "react-router-dom";
const MenuToogleAuthor = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [button, setButton] = useState(false);
    const toggleMenuHandler = () => {
        setOpenMenu(true);
        setButton(true);
    };
    const closeBackdropHandler = () => {
        setOpenMenu(false);
        setButton(false);
    };
    let buttonIcon;
    if (!button) {
        buttonIcon = (
            <ion-icon
                name="add-outline"
                class="toggle-button"
                onClick={toggleMenuHandler}
            ></ion-icon>
        );
    } else {
        buttonIcon = (
            <ion-icon
                class="toggle-button"
                name="close-outline"
                onClick={toggleMenuHandler}
            ></ion-icon>
        );
    }
    return (
        <div className="menu-toogle">
            {buttonIcon}
            {openMenu && (
                <React.Fragment>
                    <div
                        className="menu-backdrop"
                        onClick={closeBackdropHandler}
                    ></div>
                    <div className="menu-toggle__content">
                        <Link
                            to="/"
                            className="menu-link"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            Trang chủ
                        </Link>
                        <Link
                            to="/add-post"
                            className="menu-link"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            Thêm bài viết
                        </Link>
                        <Link
                            to="/add-category"
                            className="menu-link"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            Thêm danh mục
                        </Link>
                        <Link
                            to="/manage-post"
                            className="menu-link"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            Quản lý bài viết
                        </Link>
                        <Link
                            to="/manage-category"
                            className="menu-link"
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            Quản lý danh mục
                        </Link>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};
export default MenuToogleAuthor;
