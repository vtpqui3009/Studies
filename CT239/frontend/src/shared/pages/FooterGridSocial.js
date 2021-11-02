import React from "react";
import "./FooterGridSocial.css";
const FooterGridSocial = () => {
    return (
        <div className="footer-grid-wrapper">
            <p className="footer-grid__follow-text">Follow me</p>
            <div className="footer-grid__social">
                <div className="footer-grid__social-item">
                    <ion-icon name="logo-facebook"></ion-icon>
                </div>
                <div className="footer-grid__social-item">
                    <ion-icon name="logo-twitter"></ion-icon>
                </div>
                <div className="footer-grid__social-item">
                    <ion-icon name="logo-google"></ion-icon>
                </div>
            </div>
        </div>
    );
};
export default FooterGridSocial;
