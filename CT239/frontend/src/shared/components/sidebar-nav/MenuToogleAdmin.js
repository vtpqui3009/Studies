import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const MenuToogleAdmin = () => {
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
                        <NavLink to="/admin">Bài viết đang chờ</NavLink>
                        <NavLink to="/admin/pending-category">
                            Danh mục đang chờ
                        </NavLink>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};
export default MenuToogleAdmin;
