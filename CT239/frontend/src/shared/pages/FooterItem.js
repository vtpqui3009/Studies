import React from "react";
const FooterItem = (props) => {
    return (
        <div className="footer-contact__item">
            <div className="footer-contact__icon">{props.icon}</div>
            <div className="footer-contact__content">
                <div className="footer-contact__heading">{props.heading}</div>
                <div className="footer-contact__desc">{props.desc}</div>
            </div>
        </div>
    );
};
export default FooterItem;
