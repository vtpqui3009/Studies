import React from "react";
import FooterGridItem from "./FooterGridItem";
import logo from "../components/navigation/news-logo.png";
import FooterGridSocial from "./FooterGridSocial";
import FooterCategory from "./FooterCategory";
import FooterForm from "./FooterForm";
import { Row, Col } from "react-bootstrap";
import "./FooterGrid.css";
const FooterGrid = () => {
    return (
        <Row style={{ marginTop: 40 }}>
            <Col lg={4} md={4} sm={4}>
                {" "}
                <FooterGridItem
                    header={
                        <img
                            src={logo}
                            style={{
                                width: 250,
                                height: 90,
                                objectFit: "cover"
                            }}
                            alt=""
                        />
                    }
                    desc="This is a place where you maybe find some useful news and relax after a hard-working day. Let's enjoy!"
                    footer={<FooterGridSocial />}
                />
            </Col>
            <Col lg={4} md={4} sm={4}>
                {" "}
                <FooterGridItem
                    header="Popular category"
                    desc={<FooterCategory />}
                />
            </Col>
            <Col lg={4} md={4} sm={4}>
                {" "}
                <FooterGridItem
                    header="Subscibe"
                    desc="Don’t miss to subscribe to our new feeds, kindly fill the form below."
                    footer={<FooterForm />}
                />
            </Col>
        </Row>
    );
};
export default FooterGrid;
