import React from "react";
import {
    StyledPostImage,
    StylePostImageWrapper,
    StyledPostCategory
} from "../GlobalPostStyled";
import { Link } from "react-router-dom";
const LatestPostImage = (props) => {
    const publicURL = "http://localhost:5000/";
    return (
        <React.Fragment>
            <StylePostImageWrapper>
                <Link to={`/post/${props.id}`}>
                    <StyledPostImage
                        src={publicURL + props.image}
                        alt=""
                    ></StyledPostImage>
                </Link>
                <StyledPostCategory
                    latest={props.latest}
                    feature={props.feature}
                    list={props.list}
                    sidebar={props.sidebar}
                    sport={props.sport}
                    health={props.health}
                    education={props.education}
                >
                    {props.category}
                </StyledPostCategory>
            </StylePostImageWrapper>
        </React.Fragment>
    );
};
export default LatestPostImage;
