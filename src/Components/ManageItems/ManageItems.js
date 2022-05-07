import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageItems.css'


const ManageItems = () => {
    const navigate = useNavigate()

    const navigateToAddItem = () => {
        navigate('/addItem')
    }


    return (
        <div>
            <div className='my-5'>
                <button onClick={navigateToAddItem} className='add-btn-style'>Add Items</button>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ManageItems;