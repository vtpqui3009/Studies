import React from "react";
import { StyledPostDescription } from "../GlobalPostStyled";
import { Link } from "react-router-dom";
import HtmlParser from "react-html-parser";
const LatestPostDesc = (props) => {
    return (
        <StyledPostDescription>
            <Link to={`/post/${props.id}`}>{HtmlParser(props.desc)}</Link>
        </StyledPostDescription>
    );
};
export default LatestPostDesc;
