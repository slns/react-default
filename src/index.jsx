import React from "react";
import ReactDom from "react-dom";

import "./index.scss"

let ReactDefault = () => {
    return (
        <div>
            <h1>React Default</h1>
            <p>By SerSa</p>
        </div>
        
    )
}

ReactDom.render(
    <ReactDefault />,
    document.getElementById("root")
);