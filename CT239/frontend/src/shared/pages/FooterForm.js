import React from "react";
import "./FooterForm.css";
const FooterForm = () => {
    return (
        <form className="footer-form">
            <input type="text" placeholder="Email Address" />
            <button type="submit">Send</button>
            {/* <ion-icon name="send-outline"></ion-icon> */}
        </form>
    );
};
export default FooterForm;
