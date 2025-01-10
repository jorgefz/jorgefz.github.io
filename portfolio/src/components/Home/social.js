import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faBook, faBookBookmark} from '@fortawesome/free-solid-svg-icons'

const Social = () => {
    return (
        <div className="home-social">
            <a href="https://www.linkedin.com/in/jorge-fdez2/" className="home-social-icon" target="_blank">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>

            <a href="https://github.com/jorgefz" className="home-social-icon" target="_blank">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>

            <a href="https://go.warwick.ac.uk/jorgefernandez" className="home-social-icon" target="_blank">
                <FontAwesomeIcon icon={faBookBookmark}></FontAwesomeIcon>
            </a>
        </div>
    )
}

export default Social