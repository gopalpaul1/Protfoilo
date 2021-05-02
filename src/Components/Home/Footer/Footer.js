import React from 'react';
import './Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGitAlt, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab)

const Footer = () => {

    return (

        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-card1">
                    <h3 className="header-text">Gopal Kumar Paul</h3>
                    <p className="tec-text">Junior Full-Stack Developer</p>
                </div>
                <div>
                    <h3 className="header-text">Technology Expert</h3>
                    <div className="tec-text">
                        <p>- JavaScript</p>
                        <p>- React</p>
                        <p>- Node.JS</p>
                        <p>- MongoDB</p>
                    </div>
                </div>
                <div>
                    <h3 className="header-text">Contact Me</h3>
                    <div>
                        <a href="https://github.com/gopalpaul1" target="_blank"><FontAwesomeIcon style={{color:"grey", fontSize:"30px",marginRight:"30px"}} icon={fab, faGitAlt} /></a>
                        <a href="https://www.linkedin.com/in/gopal-paul-ba5050211/" target="_blank"><FontAwesomeIcon style={{color:"cyan", fontSize:"30px",marginRight:"30px"}} icon={fab, faLinkedin} /></a>
                        <a href="https://gopal.paul573747@gmail.com" target="_blank"><FontAwesomeIcon style={{color:"white", fontSize:"30px"}} icon={fab, faEnvelope} /></a>
                    </div>
                </div>
            </div>
            <div className="Footer">
                <p>All right reverse || MERN STACK DEV's || 2021</p>
            </div>
        </div>
    );
};

export default Footer;