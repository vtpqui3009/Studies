import React from "react";
import { NavLink } from "react-router-dom";
import MenuItem from "./MenuItem";
import "./Menu.css";
const Menu = () => {
    return (
        <ul className="menu">
            <li>
                <NavLink
                    to="/"
                    exact
                    activeClassName="active"
                    style={{ color: "black" }}
                >
                    <ion-icon name="home-outline"></ion-icon>
                </NavLink>
            </li>
            <MenuItem />
        </ul>
    );
};
export default Menu;
