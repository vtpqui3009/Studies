import React from "react";
import GlobalPostImage from "../../post-item/GlobalPostImage";
import GlobalPostTitle from "../../post-item/GlobalPostTitle";
import GlobalPostDesc from "../../post-item/GlobalPostDesc";
import GlobalPostMore from "../../post-item/GlobalPostMore";
import { StyledPostContent, StyledPostBlockList } from "../../GlobalPostStyled";
import { Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
const PostBlockLayout = (props) => {
    Aos.init();
    return (
        <StyledPostBlockList className="col">
            {props.postBLockList.map((post) => {
                return (
                    <Col
                        key={post.id}
                        xs={6}
                        lg={6}
                        md={12}
                        data-aos="fade-right"
                    >
                        <GlobalPostImage
                            id={post.id}
                            image={post.image}
                            category={post.category}
                            list
                        />
                        <StyledPostContent>
                            <GlobalPostTitle id={post.id} title={post.title} />
                            <GlobalPostDesc
                                id={post.id}
                                desc={post.description}
                            />
                            <GlobalPostMore
                                author={post.author}
                                createdAt={post.createdAt}
                                normal
                            />
                        </StyledPostContent>
                    </Col>
                );
            })}
        </StyledPostBlockList>
    );
};
export default PostBlockLayout;
