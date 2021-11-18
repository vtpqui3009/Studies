import React, { useEffect, useState, useContext } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { StyledDeleteButton, StyledButton } from "./GlobalCategoryStyled";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import NoCategoryFound from "./NoCategoryFound";
import axios from "axios";
const CategoryDataTable = () => {
    const auth = useContext(AuthContext);
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
    const columns = [
        {
            field: "Id",
            renderCell: (cellValues) => {
                return <span>{cellValues.row.id.substr(0, 8)}</span>;
            },
            width: 150
        },
        {
            field: "name",
            headerName: "Tên danh mục",
            width: 200
        },
        {
            field: "Ngày tạo",
            renderCell: (cellValues) => {
                return (
                    <span>
                        {new Date(cellValues.row.createdAt).toLocaleString()}
                    </span>
                );
            },
            width: 200
        },
        {
            field: "isApproved",
            headerName: "Trạng thái",
            width: 200
        },
        {
            field: "Sửa",
            renderCell: (cellValues) => {
                return (
                    <Link to={`/category/update/${cellValues.row.id}`}>
                        <StyledButton
                            update
                            className="fa fa-edit update-icon"
                        />
                    </Link>
                );
            },
            width: 120
        },
        {
            field: "Xóa",
            renderCell: (cellValues) => {
                return (
                    <StyledDeleteButton>
                        <StyledButton
                            delete
                            className="fa fa-trash-alt delete-icon"
                            onClick={(event) => {
                                handleClick(event, cellValues);
                            }}
                        />
                    </StyledDeleteButton>
                );
            },
            width: 120
        }
    ];
    const handleClick = async (event, cellValues) => {
        const cateId = cellValues.row.id;
        const config = {
            headers: { Authorization: "Bearer " + auth.token }
        };
        try {
            setIsLoading(true);
            await axios.delete(
                "http://localhost:5000/api/category/delete/" + cateId,
                config
            );
            setIsLoading(false);
        } catch (err) {}
        setloadedCategories((prevCategories) =>
            prevCategories.filter((category) => category.id !== cateId)
        );
    };
    const handleCellClick = (param, event) => {
        event.stopPropagation();
    };
    const handleRowClick = (param, event) => {
        event.stopPropagation();
    };

    return (
        <React.Fragment>
            {isLoading && <LoadingSpinner asOverlay />}
            {loadedCategories && loadedCategories.length === 0 && (
                <NoCategoryFound />
            )}
            <DataGrid
                rows={loadedCategories}
                columns={columns}
                pageSize={5}
                checkboxSelection
                onCellClick={handleCellClick}
                onRowClick={handleRowClick}
            />
        </React.Fragment>
    );
};
export default CategoryDataTable;
