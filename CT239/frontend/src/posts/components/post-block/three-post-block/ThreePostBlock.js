import React from "react";
import ThreePostItem1 from "./ThreePostItem1";
import ThreePostItem2 from "./ThreePostItem2";
import ThreePostItem3 from "./ThreePostItem3";
import "./ThreePostBlock.css";
const ThreePostBlock = () => {
    return (
        <React.Fragment>
            <ThreePostItem1 />
            <ThreePostItem2 />
            <ThreePostItem3 />
        </React.Fragment>
    );
};
export default ThreePostBlock;
