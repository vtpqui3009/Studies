import React, { useEffect, useState, useContext } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../shared/context/auth-context";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import NoPostFound from "./NoPostFound";
import { StyledButton } from "../GlobalPostStyled";
import axios from "axios";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { createStyles, makeStyles } from "@material-ui/core";

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
    /**
     * The column of the row that the current cell belongs to.
     */
    colDef: PropTypes.object.isRequired,
    /**
     * The cell value, but if the column has valueGetter, use getValue.
     */
    value: PropTypes.string.isRequired
};

const PostDataTable = () => {
    const auth = useContext(AuthContext);
    const [loadedPosts, setloadedPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    "http://localhost:5000/api/posts/?sort=createdAt"
                );
                const responseData = response.data.posts;
                setloadedPosts(responseData);
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
            width: 70
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
            width: 150,
            renderCell: renderCellExpand
        },
        {
            field: "Hình ảnh",
            renderCell: (cellValues) => {
                const publicURL = "http://localhost:5000/";
                return (
                    <img
                        className="table-post__image"
                        src={publicURL + cellValues.row.image}
                        alt=""
                    />
                );
            },
            width: 200
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
            width: 150
        },
        {
            field: "Sửa",
            renderCell: (cellValues) => {
                return (
                    <Link to={`/post/update/${cellValues.row.id}`}>
                        <StyledButton
                            update
                            className="fa fa-edit update-icon"
                        />
                    </Link>
                );
            },
            width: 100
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
            width: 100
        }
    ];
    const handleClick = async (event, cellValues) => {
        const postId = cellValues.row.id;
        const config = {
            headers: { Authorization: "Bearer " + auth.token }
        };
        try {
            setIsLoading(true);
            await axios.delete(
                "http://localhost:5000/api/posts/delete/" + postId,
                config
            );
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
        }
        setloadedPosts((prevPosPos) =>
            prevPosPos.filter((post) => post.id !== postId)
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
            {loadedPosts && loadedPosts.length === 0 && <NoPostFound />}
            <DataGrid
                rows={loadedPosts}
                columns={columns}
                pageSize={5}
                checkboxSelection
                onCellClick={handleCellClick}
                onRowClick={handleRowClick}
                rowHeight={120}
            />
        </React.Fragment>
    );
};
export default PostDataTable;
