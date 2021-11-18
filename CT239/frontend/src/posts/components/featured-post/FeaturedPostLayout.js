import React from "react";
import GlobalPostImage from "../post-item/GlobalPostImage";
import GlobalPostTitle from "../post-item/GlobalPostTitle";
import GlobalPostMore from "../post-item/GlobalPostMore";
import { StyledPostContent, StyledFeaturedPostCol } from "../GlobalPostStyled";
import { Col } from "react-bootstrap";
const FeaturedPostLayout = (props) => {
    return (
        <StyledFeaturedPostCol>
            {props.featuredPost.map((post) => {
                return (
                    <Col key={post.id} className="mb-3">
                        <GlobalPostImage
                            id={post.id}
                            image={post.image}
                            category={post.category}
                            feature
                        />
                        <StyledPostContent feature>
                            <GlobalPostTitle id={post.id} title={post.title} />
                            <GlobalPostMore
                                author={post.author}
                                createdAt={post.createdAt}
                                background
                            />
                        </StyledPostContent>
                    </Col>
                );
            })}
        </StyledFeaturedPostCol>
    );
};
export default FeaturedPostLayout;
