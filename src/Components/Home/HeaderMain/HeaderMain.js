import React from 'react';
import './HeaderMain.css'
import image from '../../Images/41544280_2208200012784258_1831048732716564480_n (1).jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const HeaderMain = () => {

    return (

        <div className="headerMain-container">
            <div className="card-content">
                <p style={{color:"darkgrey"}}>Hi, I'm</p>
                <h2 style={{color:"#00ffd5"}}>Gopal Paul</h2>
                <h4>I am Junior Full-Stack Developer</h4>
                <p style={{color:"darkgrey"}}>Junior full stack developer with well problem-solving web applications error handling, fixed bugs, debugging skills, and ability toperform well in a team.</p>
                <button className="resume-button"><Link to="/about" className="button-text">Explore me  <FontAwesomeIcon icon={faArrowRight} /></Link></button>
            </div>
            <div style={{marginLeft:"60px", marginTop:"80px"}}>
                <img className="image" src={image} alt="images" />
            </div>
        </div>
    );
};

export default HeaderMain;