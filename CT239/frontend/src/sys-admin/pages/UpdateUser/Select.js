import React from "react";
import Form from "react-bootstrap/Form";

import "./Select.css";
const Select = (props) => {
    return (
        <div>
            <label> Chọn danh mục :</label>
            <Form.Select
                aria-label="Floating label select example"
                value={props.value}
                onChange={props.onChange}
                id="select"
            >
                <option>Chọn danh mục</option>
                <option>Author</option>
                <option>Admin</option>
                <option>Admin System</option>
            </Form.Select>
        </div>
    );
};
export default Select;
