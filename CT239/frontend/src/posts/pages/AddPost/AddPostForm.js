import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../shared/components/FormElement/Button";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import Select from "./Select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AuthContext } from "../../../shared/context/auth-context";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import ImageUpload from "../../../shared/components/FormElement/ImageUpload";
import { useForm } from "../../../shared/hooks/form-hook";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import "./AddPostForm.css";
const AddPostForm = () => {
    const auth = useContext(AuthContext);
    const [ckeditorDescriptionData, setCkeditorDescriptionData] = useState("");
    const [ckeditorContentData, setCkeditorContentData] = useState("");
    const [selectValue, setSelectValue] = useState("");
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [formState, inputHandler] = useForm(
        {
            image: {
                value: null,
                isValid: false
            }
        },
        false
    );

    const selectChangedHandler = (event) => {
        console.log(event.target.value);
        setSelectValue(event.target.value);
    };
    const inputCKEditorDescHandler = (event, editor) => {
        setCkeditorDescriptionData(editor.getData());
    };
    const inputCKEditorContentHandler = (event, editor) => {
        setCkeditorContentData(editor.getData());
    };
    const history = useHistory();
    const postSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", ckeditorDescriptionData);
            formData.append("content", ckeditorContentData);
            formData.append("author", author);
            formData.append("image", formState.inputs.image.value);
            formData.append("category", selectValue);
            await sendRequest(
                "http://localhost:5000/api/posts/add-post",
                "POST",
                {
                    Authorization: "Bearer " + auth.token
                },
                formData
            );
            history.push("/manage-post");
        } catch (err) {}
    };
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <form className="add-post__form" onSubmit={postSubmitHandler}>
                {isLoading && <LoadingSpinner asOverlay />}
                <span>Thêm bài viết</span>
                <div className="title">
                    <label htmlFor="title">Tiêu đề bài viết :</label>
                    <input
                        type="text"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="description">
                    <p>Mô tả :</p>
                    <CKEditor
                        value={ckeditorDescriptionData}
                        editor={ClassicEditor}
                        id="description"
                        onChange={inputCKEditorDescHandler}
                    />
                </div>
                <div className="content">
                    <p>Nội dung :</p>
                    <CKEditor
                        value={ckeditorContentData}
                        editor={ClassicEditor}
                        id="content"
                        onChange={inputCKEditorContentHandler}
                    />
                </div>
                <ImageUpload
                    id="image"
                    onInput={inputHandler}
                    width="300px"
                    height="250px"
                />
                <div className="author">
                    <label htmlFor="author">Tác giả :</label>
                    <input
                        type="text"
                        id="author"
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <Select value={selectValue} onChange={selectChangedHandler} />
                <Button type="submit">Thêm bài viết</Button>
            </form>
        </React.Fragment>
    );
};
export default AddPostForm;
