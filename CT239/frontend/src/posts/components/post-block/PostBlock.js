import React from "react";
import PostBlockMain from "./post-block-list/PostBlockMain";
import PostBlockSidebar from "./post-block-sidebar/PostBlockSidebar";
import ThreePostBlock from "./three-post-block/ThreePostBlock";
import { Row, Col } from "react-bootstrap";
import { StyledSpacing } from "../GlobalPostStyled";
const PostBlock = () => {
    return (
        <StyledSpacing>
            <Row>
                <Col lg={8} md={12} sm={12}>
                    <PostBlockMain />
                </Col>
                <Col lg={4} md={12} sm={12}>
                    <PostBlockSidebar />
                </Col>
            </Row>

            <ThreePostBlock />
        </StyledSpacing>
    );
};
export default PostBlock;
