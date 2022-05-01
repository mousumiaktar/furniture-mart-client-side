import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/social-icon/googleicon.png';
import LoadingPage from '../LoadingPage/LoadingPage';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let errorItem;


    if(loading){
        return <LoadingPage></LoadingPage>
    }


    if (error) {
        errorItem=  <div>
            <p className='text-danger'>Error: {error?.message}</p>
          </div>
      }


      if(user){
          navigate('/home');
      }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorItem}
            <button onClick={() => signInWithGoogle()} className='btn-1'>
                <div><img src={google} alt="" /></div>
                <div>Sign In With Google </div>
            </button>
        </div>
    );
};

export default SocialLogin;
