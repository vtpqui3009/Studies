import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../UIElements/LoadingSpinner";
import "./UserInfor.css";
const UserInfo = () => {
    const [loadedUser, setLoadedUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const id = JSON.parse(localStorage.getItem("userData"));
    const publicURL = "http://localhost:5000/";
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(
                    "http://localhost:5000/api/users/" + id.userId
                );
                const responseData = response.data.user;
                setLoadedUser(responseData);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, [id.userId]);

    return (
        <React.Fragment>
            <div className="user-info">
                <p className="user-info__heading">Thông tin cá nhân</p>
                {loadedUser && (
                    <React.Fragment>
                        {isLoading && <LoadingSpinner asOverplay />}
                        <img
                            className="user-info__image"
                            src={publicURL + loadedUser.avatar}
                            alt="avt"
                        />

                        <div className="user-info__item">
                            <span>Họ tên: </span>
                            <span>{loadedUser.name}</span>
                        </div>
                        <div className="user-info__item">
                            <span>Username: </span>
                            <span>{loadedUser.username}</span>
                        </div>
                        <div className="user-info__item">
                            <span>Email: </span>
                            <span>{loadedUser.email}</span>
                        </div>
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    );
};
export default UserInfo;
