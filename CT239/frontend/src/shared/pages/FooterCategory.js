import React from "react";
import "./FooterCategory.css";
const FooterCategory = () => {
    return (
        <div className="footer-category">
            <div className="footer-category__column">
                <p className="footer-category__item">Home</p>
                <p className="footer-category__item">Services</p>
                <p className="footer-category__item">Contact</p>
            </div>
            <div className="footer-category__column">
                <p className="footer-category__item">About</p>
                <p className="footer-category__item">Portfolio</p>
                <p className="footer-category__item">Latest news</p>
            </div>
        </div>
    );
};
export default FooterCategory;
