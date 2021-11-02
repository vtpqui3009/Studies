import React from "react";
import FooterContact from "./FooterContact";
import FooterGrid from "./FooterGrid";
import FooterCopyrightText from "./FooterCopyrightText";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <FooterContact />
            <FooterGrid />
            <FooterCopyrightText />
        </div>
    );
};
export default Footer;
