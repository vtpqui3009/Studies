import React, { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import Button from "../../shared/components/FormElement/Button";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
const NewCategory = () => {
    const [loadedCategories, setloadedCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const sendRequest = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    "http://localhost:5000/api/category/all-category"
                );
                const responseData = await response.json();
                if (!response.ok) {
                    throw new Error(responseData.message);
                }
                setloadedCategories(responseData.category);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        };
        sendRequest();
    }, []);
    const categoryDeleteHandler = (deletedId) => {
        setloadedCategories((prevCategories) =>
            prevCategories.filter((category) => category.id !== deletedId)
        );
    };

    return (
        <React.Fragment>
            {loadedCategories && loadedCategories.length === 0 && (
                <div className="no-category__found">
                    <p>
                        Chưa có danh mục bài viết nào được tạo. Tạo danh mục bài
                        viết mới ngay?
                    </p>
                    <Button primary to="/add-category">
                        <div className="add-btn">
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <span>Thêm danh mục</span>
                        </div>
                    </Button>
                    {isLoading && <LoadingSpinner asOverlay />}
                </div>
            )}
            {isLoading && <LoadingSpinner asOverlay />}
            {loadedCategories && loadedCategories.length > 0 && (
                <CategoryList
                    categoryList={loadedCategories}
                    onDeleteCategory={categoryDeleteHandler}
                />
            )}
        </React.Fragment>
    );
};
export default NewCategory;
