import React from "react";
import FooterItem from "./FooterItem";
import "./FooterContact.css";
const FooterContact = () => {
    return (
        <div className="footer-contact">
            <FooterItem
                icon={<ion-icon name="location-outline"></ion-icon>}
                heading="Find me"
                desc="Sóc Trăng."
            />
            <FooterItem
                icon={<ion-icon name="call-outline"></ion-icon>}
                heading="Call me"
                desc="0356547882"
            />
            <FooterItem
                icon={<ion-icon name="mail-open-outline"></ion-icon>}
                heading="Mail me"
                desc="vtpqui@gmail.com"
            />
        </div>
    );
};
export default FooterContact;
