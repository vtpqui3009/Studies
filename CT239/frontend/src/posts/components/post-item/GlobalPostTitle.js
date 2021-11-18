import React from "react";
import { StyledPostTitle } from "../GlobalPostStyled";
import { Link } from "react-router-dom";
import HtmlParser from "react-html-parser";
const LatestPostTitle = (props) => {
    return (
        <StyledPostTitle>
            <Link to={`/post/${props.id}`}>{HtmlParser(props.title)}</Link>
        </StyledPostTitle>
    );
};
export default LatestPostTitle;
