import styled, { css } from "styled-components";
export const StyledButton = styled.i`
    font-size: 16px;
    cursor: pointer;
    ${(props) =>
        props.view &&
        css`
            color: blue;
        `}
    ${(props) =>
        props.approve &&
        css`
            color: green;
        `}
    ${(props) =>
        props.update &&
        css`
            color: #ffc107;
        `}
    ${(props) =>
        props.delete &&
        css`
            color: #dc3545;
        `}
`;
export const StyledAdminHeading = styled.div`
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    margin: 20px 0;
`;
export const StyledAdminTable = styled.div`
    width: 90%;
    margin-top: 40px;
    margin-left: 5%;
    position: relative;
    height: 100vh;
`;
