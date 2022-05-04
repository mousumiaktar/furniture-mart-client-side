import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='footer-container'>
                <div className='container'>
                    <div className='footer-area'>
                        <div>
                            <h5 className='footer-title'><i><b>Furniture Mart</b></i></h5>
                        </div>
                        <div className='categories-area'>
                            <p>CATEGORIES</p>
                            <ul className='ctegories'>
                                <li>Furniture</li>
                                <li>Tables</li>
                                <li>Seating</li>
                                <li>Bed and Bath</li>
                                <li>Desks and office</li>
                            </ul>
                        </div>
                        <div className='services-area'>
                            <p>SERVICES</p>
                            <ul>
                                <li>New Designs</li>
                                <li>Furniture Care</li>
                                <li>Gift Cards</li>
                                <li>Quick Ship</li>
                                <li>Sale</li>
                            </ul>
                        </div>
                        <div className='join-area'>
                                <p>Join Us</p>
                                <p>Enter your email below to be the first to know about new collections and product launches.</p>
                                <input type="email" placeholder='Email adress...' />
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <p><small>Copyright @ 2022.All Rights Reserved.</small></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;