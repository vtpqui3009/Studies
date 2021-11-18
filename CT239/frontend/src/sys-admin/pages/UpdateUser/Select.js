import React from "react";
import {
    StyledSelectLabel,
    StyledSelect,
    StyledOption
} from "../../components/GlobalStyledAdminSystem";
const Select = (props) => {
    return (
        <div style={{ marginBottom: "40px" }}>
            <StyledSelectLabel> Chọn vai trò :</StyledSelectLabel>
            <StyledSelect
                aria-label="Floating label select example"
                value={props.value}
                onChange={props.onChange}
                id="select"
            >
                <StyledOption>Chọn vai trò</StyledOption>
                <StyledOption>Author</StyledOption>
                <StyledOption>Admin</StyledOption>
                <StyledOption>Admin System</StyledOption>
            </StyledSelect>
        </div>
    );
};
export default Select;
