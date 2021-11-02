import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserInfor.css";
const UserInfo = () => {
    const [loadedUser, setLoadedUser] = useState({});
    const [showPassword] = useState(false);
    const [passwordValue, setPasswordValue] = useState("");
    const id = JSON.parse(localStorage.getItem("userData"));
    const publicURL = "http://localhost:5000/";
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/users/" + id.userId
                );
                setLoadedUser(response.data.user);
                setPasswordValue(response.data.user.password);
            } catch (err) {}
        };
        fetchUser();
    }, [id.userId]);
    const passwordChangedHandler = (event) => {
        console.log("Password changed");
    };
    return (
        <div className="user-info">
            <p className="user-info__heading">Thông tin cá nhân</p>
            {loadedUser && (
                <React.Fragment>
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
                    <div className="user-info__item">
                        <div className="user-infor__password-field">
                            <span>Password: </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                // value={loadedUser.password}
                                value={passwordValue}
                                onChange={passwordChangedHandler}
                                // onChange={tooglePasswordHandler}
                            />
                        </div>
                        <div className="user-infor__show-password">
                            {showPassword ? (
                                <ion-icon name="eye-off-outline"></ion-icon>
                            ) : (
                                <ion-icon name="eye-outline"></ion-icon>
                            )}
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};
export default UserInfo;
