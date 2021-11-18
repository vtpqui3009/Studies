import React from "react";
import ThreePostItem1 from "./ThreePostItem1";
import ThreePostItem2 from "./ThreePostItem2";
import ThreePostItem3 from "./ThreePostItem3";
import {
    StyledSportCategory,
    StyledHealthCategory,
    StyledEducationCategory
} from "../../GlobalPostStyled";
import { Row, Col } from "react-bootstrap";
const ThreePostBlock = () => {
    return (
        <Row>
            <Col>
                {" "}
                <StyledSportCategory>
                    <ThreePostItem1 />
                </StyledSportCategory>
            </Col>
            <Col>
                {" "}
                <StyledHealthCategory>
                    <ThreePostItem2 />
                </StyledHealthCategory>
            </Col>
            <Col>
                {" "}
                <StyledEducationCategory>
                    <ThreePostItem3 />
                </StyledEducationCategory>
            </Col>
        </Row>
    );
};
export default ThreePostBlock;
