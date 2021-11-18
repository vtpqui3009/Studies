import React, { useEffect, useState, useContext } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../shared/context/auth-context";
import { StyledButton } from "../GlobalStyledAdminSystem";
import { StyledAdminSystemProfile } from "../GlobalStyledAdminSystem";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import axios from "axios";
const AdminSystemDataTable = () => {
    const auth = useContext(AuthContext);
    const [loadedUsers, setLoadedUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    "http://localhost:5000/api/users/all-user"
                );
                const reponseData = response.data.user;
                setLoadedUsers(reponseData);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, []);
    const columns = [
        {
            field: "id",
            valueFormatter: (cellValues) => {
                const idValueFormatted = cellValues.row.id.substr(0, 8);
                return idValueFormatted;
            },
            width: 70
        },
        {
            field: "name",
            headerName: "Họ tên",
            width: 150
        },
        {
            field: "email",
            headerName: "Email",
            width: 150
        },
        {
            field: "Profile",
            renderCell: (cellValues) => {
                const publicURL = "http://localhost:5000/";
                return (
                    <StyledAdminSystemProfile
                        src={publicURL + cellValues.row.avatar}
                        alt=""
                    />
                );
            }
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
            width: 180
        },
        {
            field: "Role",
            renderCell: (cellValues) => {
                return <span>{cellValues.row.role}</span>;
            },
            width: 100
        },
        {
            field: "Sửa",
            renderCell: (cellValues) => {
                return (
                    <Link to={`/update/user/${cellValues.row.id}`}>
                        <StyledButton
                            update
                            className="fa fa-edit update-icon"
                        />
                    </Link>
                );
            },
            width: 70
        },
        {
            field: "Xóa",
            renderCell: (cellValues) => {
                return (
                    <div>
                        <StyledButton
                            delete
                            className="fa fa-trash-alt delete-icon"
                            onClick={(event) => {
                                handleClick(event, cellValues);
                            }}
                        />
                    </div>
                );
            },
            width: 70
        }
    ];
    const handleClick = async (event, cellValues) => {
        const uid = cellValues.row.id;
        const config = {
            headers: { Authorization: "Bearer " + auth.token }
        };
        try {
            setIsLoading(true);
            await axios.delete(
                "http://localhost:5000/api/users/delete/" + uid,
                config
            );
            setIsLoading(false);
        } catch (err) {}
        setLoadedUsers((prevUsers) =>
            prevUsers.filter((user) => user.id !== uid)
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

            <DataGrid
                rows={loadedUsers}
                columns={columns}
                pageSize={5}
                checkboxSelection
                onCellClick={handleCellClick}
                onRowClick={handleRowClick}
                style={{ height: 300 }}
                rowHeight={60}
            />
        </React.Fragment>
    );
};
export default AdminSystemDataTable;
