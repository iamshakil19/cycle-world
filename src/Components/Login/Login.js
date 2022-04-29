import React from 'react';
import './Login.css';
import LoginImage from '../../Images/login.jpg'
import MailLogo from '../../Images/mail.png'
import LockLogo from '../../Images/lock.png'
import SocialLogin from '../Hooks/SocialLogin';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const navigate = useNavigate()

    const navigateRegister = () => {
        navigate('/register')
    }
    return (
        <div className='login-container'>
            <div className='login-image-container'>
                <img className='login-illustration' src={LoginImage} alt="" />
            </div>
            <form className='form-container'>
                <div>
                    <h2 className='login-text text-zinc-700'>Login</h2>
                </div>
                <div className='inputs-container'>
                    <p className='email-password-text'>Email</p>
                    <div className='flex'>
                        <img src={MailLogo} alt="" />
                        <input className='input-style' type="email" name="" id="email" placeholder='Type your email' required/>
                    </div>
                    <div className='bottom-line'></div>

                    <p className='email-password-text'>Password</p>
                    <div className='flex'>
                        <img src={LockLogo} alt="" />
                        <input className='input-style' type="password" name="" id="password" placeholder='Type your password' required/>
                    </div>
                    <div className='bottom-line'></div>

                    <div className='flex justify-between forget-container'>
                        <p className='mx-4 register'>Need an Account? <span onClick={navigateRegister} className="cursor-pointer hover:text-blue-700 text-blue-500">please Register</span></p>
                        <p className='forgot-password cursor-pointer'>Forgot Password?</p>
                    </div>

                    <input className='login-button' type="submit" value="Login" />

                    <div className='or-container'>
                        <div className='line'></div>
                        <p className='text-center mx-5'>Or login with</p>
                        <div className='line'></div>
                    </div>

                    <SocialLogin></SocialLogin>
                </div>
            </form>
        </div>
    );
};

export default Login;