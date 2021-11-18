import React from "react";

import Button from "../../shared/components/FormElement/Button";
import PostDataTable from "../components/post-data-table/PostDataTable";
import {
    StyledPostContainer,
    StyledPostTable,
    StyledPostAddButton,
    StyledPostHeader
} from "../components/GlobalPostStyled";

const ManagePost = () => {
    return (
        <StyledPostContainer>
            <StyledPostTable>
                <StyledPostAddButton>
                    <Button primary to="/add-post">
                        <div className="add-btn">
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <span>Thêm bài viết</span>
                        </div>
                    </Button>
                </StyledPostAddButton>
                <StyledPostHeader>Danh sách bài đăng</StyledPostHeader>
                <PostDataTable />
            </StyledPostTable>
        </StyledPostContainer>
    );
};
export default ManagePost;
