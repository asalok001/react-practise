// Here only <p> will be flashed and changes only will be shown to this component only by the updating mechanism
// Here because of MEMO component will not re-executed/re-evaluated if the value of prop is not changed. Whether parent component will be re-rendered

import React from "react";
import MyPara from "./MyPara";

const DemoOutput = (props) => {
    console.log("DEmoOutput running");
    // return <p>{props.show ? "This is new " : ""}</p>
    return <MyPara>{props.show ? "This is new " : ""}</MyPara>
};

export default React.memo(DemoOutput);