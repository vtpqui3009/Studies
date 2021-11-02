import React, { useState, useEffect } from "react";
import "./Progress.css";
const Progress = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const progressScrollHandler = () => {
        const windowScroll = document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = (windowScroll / height) * 100;
        setScrollTop(scrolled);
    };
    useEffect(() => {
        window.addEventListener("scroll", progressScrollHandler);
        return () => {
            window.removeEventListener("scroll", progressScrollHandler);
        };
    }, []);
    return <div className="progress" style={{ width: `${scrollTop}%` }}></div>;
};
export default Progress;
