import React from 'react';
import banner from '../../images/banner/extramore3.png';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='banner-area'>
                <img className='img-fluid' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;