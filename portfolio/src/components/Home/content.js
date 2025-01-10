import React from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = () => {
    return (
        <div className="home-data">
            <h1 className="home-title">Jorge Fernández</h1>
            <h3 className="home-subtitle">Astronomer</h3>
            <p className="home-description">
                Researcher at the University of Warwick
            </p>
            <a href="mailto:jorgefz.fernandez@gmail.com" className="button button--flex">
                <FontAwesomeIcon icon={faPaperPlane}/>&nbsp; Get in touch
            </a>
        </div>
    )
}

export default Content