import React, { useState } from "react";
import { Link } from "react-router-dom";
const MenuToogleAdminSystem = () => {
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
                        <Link to="/new-user" className="menu-link">
                            Thêm user
                        </Link>
                        <Link to="/sys-admin" className="menu-link">
                            Danh sách user
                        </Link>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};
export default MenuToogleAdminSystem;
