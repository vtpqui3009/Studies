import React, { useEffect, useState, useContext } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../shared/context/auth-context";
import { StyledButton } from "../GlobalAdminStyled";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import axios from "axios";
import emailjs from "emailjs-com";
const CategoryDataTable = () => {
    const auth = useContext(AuthContext);
    const [loadedCategories, setLoadedCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    "http://localhost:5000/api/category/all-category"
                );
                const reponseData = response.data.category;
                setLoadedCategories(reponseData);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        };
        fetchCategory();
    }, []);
    const columns = [
        {
            field: "id",
            valueFormatter: (cellValues) => {
                const idValueFormatted = cellValues.row.id.substr(0, 8);
                return idValueFormatted;
            },
            width: 80
        },
        {
            field: "name",
            headerName: "Tên danh mục",
            width: 150
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
            width: 150
        },
        {
            field: "Xem",
            renderCell: (cellValues) => {
                return (
                    <Link to={`/view-category/${cellValues.row.id}`}>
                        <StyledButton view className="fa fa-eye" />
                    </Link>
                );
            },
            width: 120
        },
        {
            field: "Duyệt",
            renderCell: (cellValues) => {
                return (
                    <div>
                        <StyledButton approve>
                            <i
                                className="fa fa-check-double"
                                onClick={(event) => {
                                    handleApprove(event, cellValues);
                                }}
                            ></i>
                        </StyledButton>
                    </div>
                );
            },
            width: 120
        },
        {
            field: "Xóa",
            renderCell: (cellValues) => {
                return (
                    <div>
                        <StyledButton
                            delete
                            className="fa fa-trash-alt "
                            onClick={(event) => {
                                handleClick(event, cellValues);
                            }}
                        />
                    </div>
                );
            },
            width: 120
        }
    ];
    const handleClick = async (event, cellValues) => {
        const cid = cellValues.row.id;
        const name = cellValues.row.name;
        const config = {
            headers: { Authorization: "Bearer " + auth.token }
        };
        try {
            setIsLoading(true);
            await axios.delete(
                "http://localhost:5000/api/category/delete/" + cid,
                config
            );
            setIsLoading(false);
        } catch (err) {}
        setLoadedCategories((prevCategories) =>
            prevCategories.filter((cate) => cate.id !== cid)
        );
        const templateParams = {
            subject: `Danh mục bài viết của bạn đã bị xóa!`,
            name: "Admin",
            message: `Danh mục bài viết ${name} của bạn đã bị xóa vì một số lí do. Vui lòng liên hệ admin để biết thêm chi tiết!`
        };
        emailjs
            .send(
                "service_okxpuvs",
                "template_ud38pqj",
                templateParams,
                "user_OK3p0XQEM2KtgIfMloJI5"
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                },
                (err) => {
                    console.log("FAILED...", err);
                }
            );
    };
    const handleApprove = async (event, cellValues) => {
        const config = {
            "Content-Type": "application/json",
            headers: { Authorization: "Bearer " + auth.token }
        };
        const cid = cellValues.row.id;
        const name = cellValues.row.name;
        if (cellValues.row.isApproved !== "Approved") {
            cellValues.row.isApproved = "Approved";
        }
        const bodyParameters = {
            isApproved: cellValues.row.isApproved
        };
        try {
            setIsLoading(true);
            await axios
                .patch(
                    "http://localhost:5000/api/category/update/status/" + cid,
                    bodyParameters,
                    config
                )
                .then((response) => {
                    console.log(response);
                })
                .catch();
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
        }
        const templateParams = {
            subject: `Danh mục bài viết của bạn đã được duyệt`,
            name: "Admin",
            message: `Danh mục bài viết ${name} của bạn đã được duyệt. Hãy bắt đầu tạo những bài viết thú vị với danh mục này nào!`
        };
        emailjs
            .send(
                "service_okxpuvs",
                "template_ud38pqj",
                templateParams,
                "user_OK3p0XQEM2KtgIfMloJI5"
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                },
                (err) => {
                    console.log("FAILED...", err);
                }
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
            {isLoading && <LoadingSpinner asOverplay />}
            <DataGrid
                rows={loadedCategories}
                columns={columns}
                pageSize={5}
                checkboxSelection
                onCellClick={handleCellClick}
                onRowClick={handleRowClick}
                style={{ height: 450 }}
                rowHeight={60}
            />
        </React.Fragment>
    );
};
export default CategoryDataTable;
