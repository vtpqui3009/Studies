import SideBar from "../shared/components/sidebar-nav/SideBar";
import MainNavigation from "../shared/components/navigation/MainNavigation";
import React from "react";
import Menu from "../shared/components/menu/Menu";
import Footer from "../shared/pages/Footer";
import FilterPostByCategory from "../categories/FilterPost/FilterPostByCategory";
import { Container } from "react-bootstrap";
const FilterPostByCategoryRoute = () => {
    return (
        <Container style={{ background: "white" }}>
            <SideBar />
            <MainNavigation />
            <Menu />
            <FilterPostByCategory />
            <Footer />
        </Container>
    );
};
export default FilterPostByCategoryRoute;
