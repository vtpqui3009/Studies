import React, { useEffect, useState, useContext } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../shared/context/auth-context";
import { StyledButton } from "../GlobalAdminStyled";
import axios from "axios";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { createStyles, makeStyles } from "@material-ui/core";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import emailjs from "emailjs-com";
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            alignItems: "center",
            lineHeight: "24px",
            width: "100%",
            height: "100%",
            position: "relative",
            display: "flex",
            "& .cellValue": {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
            }
        }
    })
);

function isOverflown(element) {
    return (
        element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
    );
}

const GridCellExpand = React.memo(function GridCellExpand(props) {
    const { width, value } = props;
    const wrapper = React.useRef(null);
    const cellDiv = React.useRef(null);
    const cellValue = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const [showFullCell, setShowFullCell] = React.useState(false);
    const [showPopper, setShowPopper] = React.useState(false);

    const handleMouseEnter = () => {
        const isCurrentlyOverflown = isOverflown(cellValue.current);
        setShowPopper(isCurrentlyOverflown);
        setAnchorEl(cellDiv.current);
        setShowFullCell(true);
    };

    const handleMouseLeave = () => {
        setShowFullCell(false);
    };

    React.useEffect(() => {
        if (!showFullCell) {
            return undefined;
        }

        function handleKeyDown(nativeEvent) {
            // IE11, Edge (prior to using Bink?) use 'Esc'
            if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
                setShowFullCell(false);
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [setShowFullCell, showFullCell]);

    return (
        <div
            ref={wrapper}
            className={classes.root}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={cellDiv}
                style={{
                    height: 1,
                    width,
                    display: "block",
                    position: "absolute",
                    top: 0
                }}
            />
            <div ref={cellValue} className="cellValue">
                {value}
            </div>
            {showPopper && (
                <Popper
                    open={showFullCell && anchorEl !== null}
                    anchorEl={anchorEl}
                    style={{ width, marginLeft: -17 }}
                >
                    <Paper
                        elevation={1}
                        style={{ minHeight: wrapper.current.offsetHeight - 3 }}
                    >
                        <Typography variant="body2" style={{ padding: 8 }}>
                            {value}
                        </Typography>
                    </Paper>
                </Popper>
            )}
        </div>
    );
});

GridCellExpand.propTypes = {
    value: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired
};

function renderCellExpand(params) {
    return (
        <GridCellExpand
            value={params.value || ""}
            width={params.colDef.computedWidth}
        />
    );
}

renderCellExpand.propTypes = {
    colDef: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired
};

const PostDataTable = () => {
    const auth = useContext(AuthContext);
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    "http://localhost:5000/api/posts/?sort=createdAt"
                );
                const reponseData = response.data.posts;
                setLoadedPosts(reponseData);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []);
    const columns = [
        {
            field: "Id",
            valueFormatter: (cellValues) => {
                const idValueFormatted = cellValues.row.id.substr(0, 8);
                return idValueFormatted;
            },
            width: 100
        },
        {
            field: "title",
            headerName: "Tiêu đề",
            width: 200,
            renderCell: renderCellExpand
        },
        {
            field: "category",
            headerName: "Thuộc danh mục",
            width: 100,
            renderCell: renderCellExpand
        },
        {
            field: "Ngày đăng",
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
            field: "Trạng thái",
            renderCell: (cellValues) => {
                return <span>{cellValues.row.isApproved}</span>;
            },
            width: 110
        },
        {
            field: "Xem",
            renderCell: (cellValues) => {
                return (
                    <Link to={`/view-post/${cellValues.row.id}`}>
                        <StyledButton view className="fa fa-eye" />
                    </Link>
                );
            },
            width: 80
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
            width: 80
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
            width: 80
        }
    ];
    const handleClick = async (event, cellValues) => {
        const pid = cellValues.row.id;
        const title = cellValues.row.title;
        const config = {
            headers: { Authorization: "Bearer " + auth.token }
        };
        try {
            setIsLoading(true);
            await axios.delete(
                "http://localhost:5000/api/posts/delete/" + pid,
                config
            );
            setIsLoading(false);
        } catch (err) {}
        setLoadedPosts((prevPosts) =>
            prevPosts.filter((post) => post.id !== pid)
        );
        const templateParams = {
            subject: `Bài viết của bạn đã bị xóa`,
            name: "Admin",
            message: `Bài viết với tựa đề ${title} của bạn đã bị xóa. Hãy liên hệ admin để biết thêm chi tiết !`
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
        const pid = cellValues.row.id;
        const title = cellValues.row.title;
        if (cellValues.row.isApproved !== "Approved") {
            cellValues.row.isApproved = "Approved";
        }
        const bodyParameters = {
            isApproved: cellValues.row.isApproved
        };
        setIsLoading(true);
        try {
            await axios
                .patch(
                    "http://localhost:5000/api/posts/update/status/" + pid,
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
            subject: `Bài viết của bạn đã được duyệt`,
            name: "Admin",
            message: `Bài viết với tựa đề ${title} đã được duyệt.`
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
                rows={loadedPosts}
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
export default PostDataTable;
