import React from 'react';
import './AboutMe.css'
import image7 from '../Images/41544280_2208200012784258_1831048732716564480_n (1).jpg'
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const AboutMe = () => {
    return (
        <div>
            <Header/>
            <div className="headerMain-container">
            <div className="card-content">
                <p style={{color:"lightgrey"}}>I'm <span style={{color:"#00ffd5", fontSize:"30px"}}> Gopal Paul</span></p>
                <p style={{color:"lightgrey"}}>Junior full stack developer with well problem-solving web applications error handling, fixed bugs, debugging skills, and ability to perform well in a team. I have done some of the best projects as a JavaScript and React expert and now I have learned a lot of new things that will help me become a unique developer.</p>
                <button className="resume-button"><a href="https://drive.google.com/file/d/136uU-AbzgPKyniIoNxkFr1LxcKeDgBEB/view?usp=sharing" target="_blank" className="button-text">Resume</a></button>
            </div>
            <div style={{marginLeft:"60px", marginTop:"80px"}}>
                <img className="image" src={image7} alt="images" />
            </div>
        </div>
            <div className="about-container" style={{marginTop:"100px"}}>
                <h3 style={{color:"cyan"}}>Top Skills</h3>
                <div className="about-content">
                <div style={{display:"flex", flexWrap:"wrap"}}>
                <button className="about-button">JavaScript</button>
                <button className="about-button">React.JS</button>
                <button className="about-button">Context API</button>
                <button className="about-button">Metarial UI</button>
                <button className="about-button">BootStrap</button>
                <button className="about-button">Firebase</button>
                <button className="about-button">Node.JS</button>
                <button className="about-button">Express</button>
                <button className="about-button">MongoDB</button>
                <button className="about-button">SQL</button>
                <button className="about-button">My SQL</button>
                </div>
                </div>
            </div>
            <div className="about-container" style={{marginTop:"40px"}}>
                <h3 style={{color:"cyan"}}>Fundamental Skills</h3>
                <div className="about-content">
                <div style={{display:"flex", flexWrap:"wrap"}}>
                <button className="about-button">Next.JS</button>
                <button className="about-button">TypeScript</button>
                <button className="about-button">Redux.JS</button>
                <button className="about-button">ReactNative</button>
                <button className="about-button">Angular</button>
                <button className="about-button">Vue</button>
                </div>
                </div>
            </div>
            <div className="about-container" style={{marginTop:"40px"}}>
                <h3 style={{color:"cyan"}}>language Fundametals</h3>
                <div className="about-content">
                <div style={{display:"flex", flexWrap:"wrap"}}>
                <button className="about-button">C++</button>
                <button className="about-button">Java</button>
                <button className="about-button">Python</button>
                <button className="about-button">DS</button>
                <button className="about-button">Algoritm</button>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutMe;