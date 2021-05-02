import React from 'react';
import './Blogs.css'
import Header from '../Home/Header/Header'
import imageA from '../Images/js.png';
import imageB from '../Images/router.png';
import imageC from '../Images/node.png';
import imageD from '../Images/mongo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const Blogs = () => {
    return (
        <div>
            <Header/>
            <div className="blogs-container">
                <h2 style={{color:"cyan"}}>Blogs Coming soon ...</h2>
                <div className="blogs-content">
                    <div className="blogs-card" style={{width:"340px"}}>
                        <img style={{width:"100%",height:"250px"}} src={imageA} alt=""/>
                        <h3>Most 10 features JS6</h3>
                        <div style={{marginTop:"30px"}}>
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </div>
                    </div>
                    <div className="blogs-card" style={{width:"340px"}}>
                        <img style={{width:"100%",height:"250px"}} src={imageB} alt=""/>
                        <h3>React hooks Solution</h3>
                        <div style={{marginTop:"30px"}}>
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </div>
                    </div>
                    <div className="blogs-card" style={{width:"340px"}}>
                        <img style={{width:"100%",height:"250px"}} src={imageC} alt=""/>
                        <h3>Top 5 features Node </h3>
                        <div style={{marginTop:"30px"}}>
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </div>
                    </div>
                    <div className="blogs-card" style={{width:"340px"}}>
                        <img style={{width:"100%",height:"250px"}} src={imageD} alt=""/>
                        <h3>CRUD opration mongo</h3>
                        <div style={{marginTop:"30px"}}>
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;