import React, { useState } from "react";
import styled from "styled-components";
import { Offcanvas, Row } from "react-bootstrap";
import MenuItem from "../menu/MenuItem";
const StyledBarIcon = styled.i`
    font-size: 24px;
    cursor: pointer;
`;

const BarIcon = ({ name, ...props }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="d-xl-none">
            <StyledBarIcon className="fa fa-bars" onClick={handleShow} />
            <Offcanvas show={show} onHide={handleClose} {...props}>
                {/* <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header> */}
                <Offcanvas.Body>
                    <Row className="d-flex flex-column">
                        <MenuItem style={{ marginBottom: "20px" }} />
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};
export default BarIcon;
