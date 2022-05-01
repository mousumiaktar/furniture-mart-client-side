import React from 'react';
import errorimg from "../../images/errorimages/error-1.png";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container'>
            <h3>Oops!!!! Page Not Found</h3>
            <img src={errorimg} alt="" />
        </div>
    );
};

export default NotFound;