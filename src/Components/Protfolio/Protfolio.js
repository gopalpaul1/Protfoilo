import React from 'react';
import './Protfolio.css';
import image1 from '../Images/gowash 1.png'
import image2 from '../Images/books.png'
import image3 from '../Images/riders 2.png'
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';

const Protfolio = () => {

    return (

        <div>
            <Header/>
            <div className="protfolio-conatainer" style={{marginTop:"100px"}}>
            <div style={{marginBottom:"20px"}}>
                <h3 style={{color:"cyan"}}>Projects....</h3>
            </div>
            <div style={{borderBottom:"2px solid lightgrey",padding:"20px"}}>
                <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", marginLeft:"60px", marginRight:"60px"}}>
                    <div>
                        <img style={{width:"400px", height:"260px"}} src={image1} alt=""/>
                    </div>
                    <div>
                        <h4 style={{color:"cyan"}}>Go Wash Laundry</h4>
                        <p style={{color:"white"}}>Service providers do laundry and organize a lot of services.Place an order, user review and order list, Admin panel control order status, service add, delete.</p>
                        <p><b><a href="https://github.com/gopalpaul1/GowashLaundry-Client" style={{marginRight:"20px", color:"crimson"}}>Git</a></b><b><a href="https://go-wash-laundry.web.app/" style={{color:"crimson"}}>Live Site</a></b></p>
                        <div className="about-content">
                        <div style={{display:"flex", flexWrap:"wrap"}}>
                            <button className="about-button">Javascript</button>
                            <button className="about-button">React.js</button>
                            <button className="about-button">Firebase</button>
                            <button className="about-button">Bootstrap</button>
                            <button className="about-button">Node.JS</button>
                            <button className="about-button">Express</button>
                            <button className="about-button">MongoDB</button>
                            <button className="about-button">CSS</button>
                            <button className="about-button">HTML5</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{borderBottom:"2px solid lightgrey",padding:"20px"}}>
                <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", marginLeft:"60px", marginRight:"60px"}}>
                    <div>
                        <img style={{width:"400px", height:"260px"}} src={image2} alt=""/>
                    </div>
                    <div>
                        <h4 style={{color:"cyan"}}>Books library</h4>
                        <p style={{color:"white"}}>Showing the home page with books added, the user can place an order with the click buy now checkout page.The order list can only view his orders and delete the order of desire.</p>
                        <p><b><a href="https://github.com/gopalpaul1/BooksLibrary-Client" style={{marginRight:"20px", color:"crimson"}}>Git</a></b><b><a href="https://books-libraray.web.app/" style={{color:"crimson"}}>Live Site</a></b></p>
                        <div className="about-content">
                        <div style={{display:"flex", flexWrap:"wrap"}}>
                            <button className="about-button">Context API</button>
                            <button className="about-button">React.js</button>
                            <button className="about-button">Firebase</button>
                            <button className="about-button">Bootstrap</button>
                            <button className="about-button">Node.JS</button>
                            <button className="about-button">Express</button>
                            <button className="about-button">MongoDB</button>
                            <button className="about-button">CSS</button>
                            <button className="about-button">HTML5</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{padding:"20px"}}>
                <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", marginLeft:"60px", marginRight:"60px"}}>
                    <div>
                        <img style={{width:"400px", height:"260px"}} src={image3} alt=""/>
                    </div>
                    <div>
                        <h4 style={{color:"cyan"}}>Riders Pro</h4>
                        <p style={{color:"white"}}>Rideshare with a multiple-choice car, bike, bus, train, and location.react-router, react-hocks, authentication, private route, map.</p>
                        <p><b><a href="https://github.com/gopalpaul1/Go-Riders-Pro" style={{marginRight:"20px", color:"crimson"}}>Git</a></b><b><a href="https://go-riders-pro.web.app/" style={{color:"crimson"}}>Live Site</a></b></p>
                        <div className="about-content">
                        <div style={{display:"flex", flexWrap:"wrap"}}>
                            <button className="about-button">Javascript</button>
                            <button className="about-button">React.js</button>
                            <button className="about-button">Firebase</button>
                            <button className="about-button">Bootstrap</button>
                            <button className="about-button">Map</button>
                            <button className="about-button">CSS</button>
                            <button className="about-button">HTML5</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Protfolio;