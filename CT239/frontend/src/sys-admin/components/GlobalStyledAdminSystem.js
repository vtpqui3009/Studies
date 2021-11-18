import styled, { css } from "styled-components";
export const StyledAdminSystemTable = styled.div`
    width: 90%;
    margin-top: 40px;
`;
export const StyledAdminSystemHeading = styled.div`
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    margin: 20px 0;
`;
export const StyledAdminSystemProfile = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`;
export const StyledAdminSystemContainer = styled.div`
    margin-left: 22%;
    height: 100vh;
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
export const StyledUpdateUserForm = styled.form`
    width: 50rem;
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
`;
export const StyledUpdateUserFormContainer = styled.div`
    padding: 0 140px;
`;
export const StyledUpdateUserFormInput = styled.input`
    display: block;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 6px;
    outline: none;
    border: 1px solid #ccc;
    &:focus {
        outline: none;
    }
`;
export const StyledSelectLabel = styled.label`
    font-weight: bold;
`;
export const StyledSelect = styled.select`
    width: 100%;
    display: block;
    margin: 10px 0 40px 0;
    padding: 8px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #ccc;
    font-size: 16px;
    color: gray;
    &:hover {
        border-color: gray;
    }
    &:focus,
    &:active {
        border-color: #005cc8;
    }
`;
export const StyledOption = styled.option`
    padding: 10px;
    font-size: 14px;
    color: gray;
    margin-bottom: 10px;
    display: block;
`;
