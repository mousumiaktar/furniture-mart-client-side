import React from 'react';
import './OtherSection.css';
import testimonial1 from '../../images/testimonial/testimonial1.png';
import testimonial2 from '../../images/testimonial/testimonial2.png';
import testimonial3 from '../../images/testimonial/testimonial3.png';

const OtherSection = () => {
    return (
        <div className='container mt-5'>
            <div className='other-section-container mt-5 mb-5'>
                <h2 className='mb-5'><b><i>Testimonials</i></b></h2>
                <div className='other-container'>
                    <div className='single-container'>
                        <img src={testimonial1} alt="" />
                        <h4 className='mt-3'>Ann Smith</h4>
                        <p>First perfectly, also super comfortable! Can tell this one will be loved and in style for a very log time!</p>
                    </div>
                    <div className='single-container'>
                        <img src={testimonial2} alt="" />
                        <h4 className='mt-3'>Celine</h4>
                        <p>First perfectly, also super comfortable! Can tell this one will be loved and in style for a very log time!</p>
                    </div>
                    <div className='single-container'>
                        <img src={testimonial3} alt="" />
                        <h4 className='mt-3'>Oceane</h4>
                        <p>First perfectly, also super comfortable! Can tell this one will be loved and in style for a very log time!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherSection;