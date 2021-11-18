import React from "react";
import Button from "../../shared/components/FormElement/Button";
import {
    StyledCategoryHeading,
    StyledCategoryContainer,
    StyledCategoryTable,
    StyledCategoryAddButton
} from "../components/GlobalCategoryStyled";
import CategoryDataTable from "../components/CategoryDataTable";
const ManageCategory = () => {
    return (
        <StyledCategoryContainer>
            <StyledCategoryTable>
                <StyledCategoryAddButton>
                    <Button primary to="/add-category">
                        <div className="add-btn">
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <span>Thêm danh mục</span>
                        </div>
                    </Button>
                </StyledCategoryAddButton>
                <StyledCategoryHeading>Danh mục bài viết</StyledCategoryHeading>
                <CategoryDataTable />
            </StyledCategoryTable>
        </StyledCategoryContainer>
    );
};
export default ManageCategory;
