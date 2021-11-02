import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import Menu from "../shared/components/menu/Menu";
import Footer from "../shared/pages/Footer";
import FilterPostByCategory from "../categories/FilterPost/FilterPostByCategory";
import React from "react";
const FilterPostByCategoryRoute = () => {
    return (
        <React.Fragment>
            <SideBar />
            <MainNavigation />
            <Menu />
            <FilterPostByCategory />
            <Footer />
        </React.Fragment>
    );
};
export default FilterPostByCategoryRoute;
