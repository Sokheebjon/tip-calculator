import React from "react";
import {ReactComponent as ReactLogo} from "assets/icons/logo.svg";
import "./logo.scss";


const Logo = () => {
    return (
        <div className="logo__wrapper">
            <ReactLogo/>
        </div>
    )
}

export default Logo