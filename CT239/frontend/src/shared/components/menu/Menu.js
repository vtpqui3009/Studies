import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Menu.css";
const Menu = () => {
    const [didMount, setDidMount] = useState(false);
    const [loadedCategories, setLoadedCategories] = useState([]);
    useEffect(() => {
        const getLoadedCategories = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/category/all-category"
                );
                const responseData = response.data.category;
                setLoadedCategories(responseData);
            } catch (err) {}
        };
        getLoadedCategories();
    }, []);

    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }
    const filterCategory = loadedCategories.filter(
        (category) => category.isApproved === "Approved"
    );
    return (
        <ul className="menu">
            <li>
                <NavLink to="/" exact activeClassName="active">
                    <ion-icon name="home-outline"></ion-icon>
                </NavLink>
            </li>
            {filterCategory &&
                filterCategory.length > 0 &&
                filterCategory.map((categories) => {
                    return (
                        <li key={categories.id}>
                            <NavLink
                                activeClassName="active"
                                to={`/${categories.id}/filter-post`}
                            >
                                {categories.name}
                            </NavLink>
                        </li>
                    );
                })}
        </ul>
    );
};
export default Menu;
