import React from 'react';
import './ContactMe.css'
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';

const ContactMe = () => {

    return (
        <div>
            <Header/>
            <div className="form-container">
            <h2 style={{color:"cyan",textAlign:"center", marginBottom:"40px"}}>Contact Me</h2>
            <Form className="form-card">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" style={{ border: '2px solid #7afafa' }} placeholder="Your Name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" style={{ border: '2px solid #7afafa' }} placeholder="Your Email Address" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={8} style={{ border: '2px solid #7afafa' }} placeholder="Please Your Comment" />
                </Form.Group>
                <p style={{color:"grey"}}>Please contact with Email: <a href="http://gopal.paul573747@gmail.com" target="_blank">gopal.paul573747@gmail.com</a> </p>
            </Form>
        </div>
        <Footer/>
        </div>
    );
};

export default ContactMe;