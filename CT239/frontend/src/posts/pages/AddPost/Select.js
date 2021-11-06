import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./Select.css";
const Select = (props) => {
    const [loadedCategories, setLoadedCategory] = useState([]);
    useEffect(() => {
        const getLoadedCategories = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/category/all-category"
                );
                const responseData = await response.data.category;
                setLoadedCategory(responseData);
            } catch (err) {}
        };
        getLoadedCategories();
    }, []);
    const filterCategory = loadedCategories.filter(
        (category) => category.isApproved === "Approved"
    );
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
                {filterCategory.length > 0 &&
                    filterCategory.map((categories) => {
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
