import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <div className="header-container">
                <div>
                    <h2 to="/home" style={{color: "#00ffd5", marginLeft:"40px"}}>Paul's Dev</h2>
                </div>
                <div className="header-card2">
                <Link className="nav-text" to="/home">Home</Link>
                <a className="nav-text" href="https://drive.google.com/file/d/136uU-AbzgPKyniIoNxkFr1LxcKeDgBEB/view?usp=sharing" target="_blank">Resume</a>
                <Link className="nav-text" to="/protfolio">Protfolio</Link>
                <Link className="nav-text" to="/blogs">Blogs</Link>
                <Link className="nav-text" to="/contact">Contact me</Link> 
                </div>
            </div>
    );
};

export default Header;