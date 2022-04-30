import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import registImg from '../../images/formimg/regist2.png';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate("/login")
    }
    return (
        <div className='container'>
      <div className='signup-container'>
        <div className='signup-img'>
          <img src={registImg} alt="" />
        </div>
        <div className="register-form-container">
          <h2>Please Register </h2>
          <form>
            <input type="text" name="name" placeholder="Enter Your Name" />

            <input type="email" name="email" id="" placeholder="Enter Your Email" required />

            <input type="password" name="password" id="" placeholder="Enter Your Password" required />

            <input className="W-50 mx-auto btn btn-primary mt-2" type="submit" value="Register" />
          </form>

          <p> Already have an account? <Link to="/login" className="text-primary pe-auto text-decoration-none" onClick={navigateLogin}> Please Login </Link> </p>
        </div>
      </div>
    </div>
    );
};

export default Register;