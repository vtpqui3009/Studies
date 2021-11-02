import React from "react";

const FooterGridItem = (props) => {
    return (
        <div className="footer-grid__item">
            <div className="footer-grid__header">{props.header}</div>
            <div className="footer-grid__desc">{props.desc}</div>
            <div className="footer-grid__footer">{props.footer}</div>
        </div>
    );
};
export default FooterGridItem;
