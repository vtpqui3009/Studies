import React from "react";
import { StyledNoCategoryFound } from "./GlobalCategoryStyled";
import Button from "../../shared/components/FormElement/Button";
const NoCategoryFound = () => {
    return (
        <StyledNoCategoryFound>
            <p>
                Chưa có danh mục bài viết nào được tạo. Tạo danh mục bài viết
                mới ngay?
            </p>
            <Button primary to="/add-category">
                <div className="add-btn">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <span>Thêm danh mục</span>
                </div>
            </Button>
        </StyledNoCategoryFound>
    );
};
export default NoCategoryFound;
