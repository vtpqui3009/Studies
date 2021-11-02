import React, { useState } from "react";
import "./OnTopButton.css";

const OnTopButton = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    window.addEventListener("scroll", toggleVisible);
    return (
        <ion-icon
            name="chevron-up-outline"
            class="on-top__button"
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
        ></ion-icon>
    );
};
export default OnTopButton;
