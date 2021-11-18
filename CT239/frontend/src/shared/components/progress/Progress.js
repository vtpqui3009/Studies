import React, { useState, useEffect } from "react";
import styled from "styled-components";
const StyleProgress = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #ec0000;
    width: 0;
    transition: all 0.2s linear;
    z-index: 99999;
`;
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
    return <StyleProgress style={{ width: `${scrollTop}%` }}></StyleProgress>;
};
export default Progress;
