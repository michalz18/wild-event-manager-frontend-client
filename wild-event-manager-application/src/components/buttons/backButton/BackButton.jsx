import React from "react";
import { Link } from "react-router-dom";
import "./BackButton.scss";

const BackButton = () => {
    return (
        <div className="BackButton">
            <Link to="/">
                <button className="back-button" type="button">
                <i className="icon bi bi-skip-backward-fill"></i>
                    </button>
            </Link>
        </div>
    )
}

export default BackButton;