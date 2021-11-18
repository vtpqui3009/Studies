import React from "react";
import {
    StyledPostAuthor,
    StyledPostMore,
    StyledPostTime
} from "../GlobalPostStyled";
const LatestPostMore = (props) => {
    return (
        <StyledPostMore>
            <StyledPostAuthor
                normal={props.normal}
                background={props.background}
            >
                <ion-icon name="person-outline"></ion-icon>
                <span>{props.author}</span>
            </StyledPostAuthor>
            <StyledPostTime normal={props.normal} background={props.background}>
                <ion-icon name="time-outline"></ion-icon>
                <span>{new Date(props.createdAt).toLocaleDateString()}</span>
            </StyledPostTime>
        </StyledPostMore>
    );
};
export default LatestPostMore;
