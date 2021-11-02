import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import Progress from "../../../shared/components/progress/Progress";
import ReactHtmlParser from "react-html-parser";
import "./PostDetail.css";
const PostDetail = () => {
    const publicURL = "http://localhost:5000/";
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [detailPostData, setDetailPostData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const getSinglePost = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(
                    "http://localhost:5000/api/posts/" + path
                );
                const responseData = await res.json();
                setDetailPostData(responseData.post);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                console.log(err);
            }
        };
        getSinglePost();
    }, [path]);

    return (
        <React.Fragment>
            {isLoading && <LoadingSpinner asOverlay />}
            {detailPostData && (
                <React.Fragment>
                    <Progress />
                    <div className="post-detail__wrapper">
                        <span className="post-date">
                            {new Date(
                                detailPostData.createdAt
                            ).toLocaleString()}
                        </span>
                        <div className="post-title">{detailPostData.title}</div>
                        <div className="post-desc">
                            <p>{ReactHtmlParser(detailPostData.description)}</p>
                        </div>
                        {detailPostData.image && (
                            <div className="post-image">
                                <img
                                    src={publicURL + detailPostData.image}
                                    alt={detailPostData.title}
                                />
                            </div>
                        )}
                        <div className="post-content">
                            <p>{ReactHtmlParser(detailPostData.content)}</p>
                        </div>
                        <div className="post-author">
                            <span>{detailPostData.author}</span>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default PostDetail;
