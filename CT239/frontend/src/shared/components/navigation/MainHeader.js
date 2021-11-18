import React from "react";
import styled from "styled-components";

const StyledMainHeader = styled.header`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    z-index: 999;
    background-color: #fff;
    border-bottom: 1xp solid #ccc;
`;
const MainHeader = (props) => {
    return <StyledMainHeader>{props.children}</StyledMainHeader>;
};
export default MainHeader;
