import React from "react";
import GlobalPostImage from "../post-item/GlobalPostImage";
import GlobalPostTitle from "../post-item/GlobalPostTitle";
import GlobalPostMore from "../post-item/GlobalPostMore";
import { StyledPostContent } from "../GlobalPostStyled";
import { Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
const LatestPostLayout = (props) => {
    Aos.init();
    return (
        <Row>
            {props.latestPosts.map((post) => {
                return (
                    <Col
                        data-aos="fade-up"
                        lg={3}
                        md={6}
                        sm={6}
                        latest
                        key={post.id}
                        className="mb-3"
                    >
                        <GlobalPostImage
                            id={post.id}
                            image={post.image}
                            category={post.category}
                            latest
                        />
                        <StyledPostContent>
                            <GlobalPostTitle id={post.id} title={post.title} />
                            <GlobalPostMore
                                author={post.author}
                                createdAt={post.createdAt}
                                normal
                            />
                        </StyledPostContent>
                    </Col>
                );
            })}
        </Row>
    );
};
export default LatestPostLayout;
