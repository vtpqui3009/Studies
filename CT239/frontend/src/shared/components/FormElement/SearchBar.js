import React, { useState, useEffect } from "react";
import "./SearchBar.css";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
function SearchBar() {
    const [filteredData, setFilteredData] = useState([]);
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [didMount, setDidMount] = useState(false);
    useEffect(() => {
        const fetchAllPost = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/posts"
                );
                const responseData = await response.data.posts;
                setLoadedPosts(responseData);
            } catch (err) {}
        };
        fetchAllPost();
    }, []);
    useEffect(() => {
        setDidMount(true);
        return () => setDidMount(false);
    }, []);

    if (!didMount) {
        return null;
    }
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = loadedPosts.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder="Tìm kiếm tin tức ..."
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <ion-icon name="search-outline"></ion-icon>
                    ) : (
                        <ion-icon
                            name="close-outline"
                            id="clearBtn"
                            onClick={clearInput}
                        ></ion-icon>
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 8).map((post, key) => {
                        return (
                            <Link to={`/post/${post.id}`} key={post.id}>
                                <p>{ReactHtmlParser(post.title)} </p>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
