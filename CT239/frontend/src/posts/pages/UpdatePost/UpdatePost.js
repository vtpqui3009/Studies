import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../shared/components/FormElement/Button";
import { useLocation } from "react-router";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AuthContext } from "../../../shared/context/auth-context";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import "./UpdatePost.css";
const UpdatePost = () => {
    const { error, sendRequest, clearError } = useHttpClient();
    const [loadedPost, setLoadedPost] = useState("");
    const [title, setTitle] = useState("");
    const [ckeditorDescriptionData, setCkeditorDescriptionData] = useState("");
    const [ckeditorContentData, setCkeditorContentData] = useState("");
    const history = useHistory();
    const location = useLocation();
    const path = location.pathname.split("/")[3];
    const auth = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchPost = async () => {
            setIsLoading(true);
            try {
                const responseData = await sendRequest(
                    "http://localhost:5000/api/posts/" + path
                );
                setLoadedPost(responseData.post);
                setTitle(responseData.post.title);
                setIsLoading(false);
            } catch (err) {}
        };
        fetchPost();
    }, [sendRequest, path]);
    const postUpdateSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            await sendRequest(
                "http://localhost:5000/api/posts/update/" + path,
                "PATCH",
                {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + auth.token
                },
                JSON.stringify({
                    title: title,
                    description: ckeditorDescriptionData,
                    content: ckeditorContentData
                })
            );
        } catch (err) {}
        history.push("/manage-post");
    };
    const titleChangedHandler = (event) => {
        setTitle(event.target.value);
    };
    const inputCKEditorDescHandler = (event, editor) => {
        setCkeditorDescriptionData(editor.getData());
    };
    const inputCKEditorContentHandler = (event, editor) => {
        setCkeditorContentData(editor.getData());
    };
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && <LoadingSpinner asOverlay />}
            <form
                onSubmit={postUpdateSubmitHandler}
                className="post-form__update"
            >
                <p className="post-form__update-title">Cập nhật bài viết</p>
                {loadedPost && (
                    <React.Fragment>
                        <div className="title">
                            <label htmlFor="title">Tên danh mục :</label>
                            <input
                                type="text"
                                value={title}
                                onChange={titleChangedHandler}
                            />
                        </div>
                        <div className="description">
                            <p>Mô tả :</p>
                            <CKEditor
                                editor={ClassicEditor}
                                id="description"
                                data={loadedPost.description}
                                value={ckeditorDescriptionData}
                                onChange={inputCKEditorDescHandler}
                            />
                        </div>
                        <div
                            className="content"
                            style={{ marginBottom: "40px" }}
                        >
                            <p>Nội dung :</p>
                            <CKEditor
                                editor={ClassicEditor}
                                id="content"
                                data={loadedPost.content}
                                value={ckeditorContentData}
                                onChange={inputCKEditorContentHandler}
                            />
                        </div>
                    </React.Fragment>
                )}
                <Button type="submit">Cập nhật</Button>
            </form>
        </React.Fragment>
    );
};
export default UpdatePost;
