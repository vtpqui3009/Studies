import React from "react";
import FooterItem from "./FooterItem";
import "./FooterContact.css";
import { Row, Col } from "react-bootstrap";
const FooterContact = () => {
    return (
        <Row className="footer-contact">
            <Col lg={4} md={4} sm={12}>
                {" "}
                <FooterItem
                    icon={<ion-icon name="location-outline"></ion-icon>}
                    heading="Find me"
                    desc="Sóc Trăng."
                />
            </Col>
            <Col lg={4} md={4} sm={12}>
                {" "}
                <FooterItem
                    icon={<ion-icon name="call-outline"></ion-icon>}
                    heading="Call me"
                    desc="0356547882"
                />
            </Col>
            <Col lg={4} md={4} sm={12}>
                <FooterItem
                    icon={<ion-icon name="mail-open-outline"></ion-icon>}
                    heading="Mail me"
                    desc="vtpqui@gmail.com"
                />
            </Col>
        </Row>
    );
};
export default FooterContact;
