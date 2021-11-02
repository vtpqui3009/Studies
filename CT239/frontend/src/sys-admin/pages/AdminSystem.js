import React, { useEffect, useState } from "react";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import UserList from "../components/UserList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import axios from "axios";
const AdminSystem = () => {
    const [error, setError] = useState();
    const [loadedUsers, setLoadedUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [didMount, setDidMount] = useState(false);
    useEffect(() => {
        const sendRequest = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/users/all-user"
                );
                const responseData = await response.data.user;
                setLoadedUsers(responseData);
                setIsLoading(false);
            } catch (err) {}
        };
        sendRequest();
    }, []);

    const errorHandler = () => {
        setError(null);
    };
    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);
    if (!didMount) {
        return null;
    }
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={errorHandler} />
            {isLoading && <LoadingSpinner asOverlay />}
            {loadedUsers && <UserList userList={loadedUsers} />}
        </React.Fragment>
    );
};
export default AdminSystem;
