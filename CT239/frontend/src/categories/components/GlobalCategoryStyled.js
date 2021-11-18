import styled, { css } from "styled-components";
export const StyledCategoryHeading = styled.div`
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    margin: 20px 0;
`;
export const StyledCategoryContainer = styled.div`
    padding: 0 100px;
    height: 90vh;
`;
export const StyledCategoryTable = styled.div`
    width: 100%;
    margin-top: 150px;
    height: 400px;
`;
export const StyledDeleteButton = styled.button`
    outline: none;
    border: 0;
    background-color: transparent;
`;
export const StyledButton = styled.i`
    font-size: 16px;
    cursor: pointer;
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
export const StyledCategoryAddButton = styled.div`
    & > a:hover {
        color: white;
    }
`;
export const StyledNoCategoryFound = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > p {
        margin: 20px;
    }
`;
