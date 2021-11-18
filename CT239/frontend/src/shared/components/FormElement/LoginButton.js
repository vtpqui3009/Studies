import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const StyledButton = styled.button`
    padding: 6px 14px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #eee;
    transition: all 0.25s ease-in-out;
    cursor: pointer;
    white-space: nowrap;
    :hover {
        background-color: #ec0000;
        color: white;
    }
`;
const LoginButton = () => {
    return (
        <NavLink to="/auth">
            <StyledButton>Đăng nhập</StyledButton>
        </NavLink>
    );
};
export default LoginButton;
