import React from "react";
import GlobalPostImage from "../../post-item/GlobalPostImage";
import GlobalPostTitle from "../../post-item/GlobalPostTitle";
import GlobalPostMore from "../../post-item/GlobalPostMore";
import {
    StyledPostContent,
    StyledPostBlockSidebar
} from "../../GlobalPostStyled";
import { Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
const ThreePostLayout = (props) => {
    Aos.init();
    return (
        <StyledPostBlockSidebar className="col">
            {props.threePosts.map((post) => {
                return (
                    <Col xs={12} key={post.id} data-aos="fade-up">
                        <GlobalPostImage
                            id={post.id}
                            image={post.image}
                            category={post.category}
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
        </StyledPostBlockSidebar>
    );
};
export default ThreePostLayout;
