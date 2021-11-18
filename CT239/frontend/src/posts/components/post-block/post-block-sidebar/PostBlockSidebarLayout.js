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
const PostBlockSidebarLayout = (props) => {
    Aos.init();
    return (
        <StyledPostBlockSidebar className="col" data-aos="fade-left">
            {props.postsSidebar.map((post) => {
                return (
                    <Col key={post.id} xs={12}>
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
        </StyledPostBlockSidebar>
    );
};
export default PostBlockSidebarLayout;
