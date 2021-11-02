import React, { useState, useEffect } from "react";
import "./Select.css";
import Form from "react-bootstrap/Form";
const Select = (props) => {
    const [loadedCategories, setLoadedCategory] = useState([]);
    useEffect(() => {
        const getLoadedCategories = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/category/all-category"
                );
                // console.log(response);
                if (!response.ok) {
                    throw new Error(response.message);
                }
                const responseData = await response.json();
                // console.log(responseData);
                setLoadedCategory(responseData.category);
            } catch (err) {
                console.log(err);
            }
        };
        getLoadedCategories();
    }, []);
    return (
        <div>
            <p> Chọn danh mục :</p>
            <Form.Select
                aria-label="Floating label select example"
                value={props.value}
                onChange={props.onChange}
                id="select"
            >
                <option>Chọn danh mục</option>
                {loadedCategories.length > 0 &&
                    loadedCategories.map((categories) => {
                        return (
                            <option
                                value={categories.name}
                                key={categories.id}
                                style={{ height: "40px" }}
                            >
                                {categories.name}
                            </option>
                        );
                    })}
            </Form.Select>
        </div>
    );
};
export default Select;
