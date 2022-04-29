import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import payment1 from '../../Images/payment1.png'
import payment2 from '../../Images/payment2.png'
import payment3 from '../../Images/payment3.png'
import payment4 from '../../Images/payment4.png'
import toast from 'react-hot-toast';


const Footer = () => {

    const handleEmailSubmit = event => {
        event.preventDefault()
        event.target.reset()
        toast.success('Thanks for subscribing')
    }

    return (
        <footer className='footer-container'>
            <div className='footer-info-container'>
                <div className='large-device'>
                    <div className=''>
                        <h2 className='text-2xl text-white font-semibold my-4'>Shop By</h2>
                        <Link to={'/'}>Your Order</Link>
                        <br />
                        <Link to={'/'}>Your Wishlist</Link>
                        <br />
                        <Link to={'/'}>Payment</Link>
                        <br />
                        <Link to={'/'}>Delivery</Link>
                        <br />
                        <Link to={'/'}>Conditions</Link>
                        <br />
                    </div>
                </div>

                <div className='large-device'>
                    <div className=''>
                        <h2 className='text-2xl text-white font-semibold my-4'>Products</h2>
                        <Link to={'/'}>Prices drop</Link>
                        <br />
                        <Link to={'/'}>New products</Link>
                        <br />
                        <Link to={'/'}>Best Sales</Link>
                        <br />
                        <Link to={'/'}>Stores</Link>
                        <br />
                        <Link to={'/login'}>Login</Link>
                        <br />
                    </div>
                </div>

                <div className='large-device'>
                    <div className=''>
                        <h2 className='text-2xl text-white font-semibold my-4'>Our Company</h2>
                        <Link to={'/'}>Delivery</Link>
                        <br />
                        <Link to={'/'}>About us</Link>
                        <br />
                        <Link to={'/'}>Contact us</Link>
                        <br />
                        <Link to={'/'}>Sitemap</Link>
                        <br />
                        <Link to={'/'}>Stores</Link>
                        <br />
                    </div>
                </div>

                <div className='large-device'>
                    <div className=''>
                        <h2 className='text-2xl text-white font-semibold my-4'>Newsletter</h2>
                        <form onSubmit={handleEmailSubmit}>
                            <input className='input-email-style' type="email" name="newsEmail" placeholder='Email' required />
                            <input className='submit-button' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>

            </div>
            <div className='footer-bottom-line'></div>
            <div className='copyright-container'>
                <p className='copyright-text'>Copyright © {new Date().getFullYear()} </p>
                <div className='footer-image-container'>
                    <img src={payment1} alt="" />
                    <img src={payment2} alt="" />
                    <img src={payment3} alt="" />
                    <img src={payment4} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;