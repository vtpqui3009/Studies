import React from "react";
import { StyledPostHeading, StyledPostLine } from "../GlobalPostStyled";
const PostWrapper = (props) => {
    return (
        <React.Fragment>
            <StyledPostHeading
                latest={props.latest}
                list={props.list}
                sidebar={props.sidebar}
                sport={props.sport}
                education={props.education}
                health={props.health}
            >
                {props.heading}
            </StyledPostHeading>
            <StyledPostLine
                latest={props.latest}
                list={props.list}
                sidebar={props.sidebar}
                sport={props.sport}
                health={props.health}
                education={props.education}
            />
        </React.Fragment>
    );
};
export default PostWrapper;
