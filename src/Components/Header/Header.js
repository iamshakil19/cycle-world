import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import adminLogo from '../../Images/admin.png'
import ActiveRoute from '../ActiveRoute/ActiveRoute';


const Header = () => {
    const navigate = useNavigate()

    const navigateToAdminHome = () => {
        navigate('/')
    }

    return (
        <div className='header-container'>
            <div className='adminLogo-container'>
                <img className='cursor-pointer' onClick={navigateToAdminHome} src={adminLogo} alt="" />
            </div>
            <div>
                <ActiveRoute to={'/'}>Home</ActiveRoute>
            </div>

        </div>
    );
};

export default Header;