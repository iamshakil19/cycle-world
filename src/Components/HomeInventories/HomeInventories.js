import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeInventories.css'


const HomeInventories = ({ product }) => {
    const navigate = useNavigate()
    const navigateToInventoryDetails = (_id) => {
        navigate(`/details/${_id}`)
    }
    const { img, name, _id, description, price, quantity, supplier } = product
    return (
        <div className='product-style'>
            <img src={img} alt="" />
            <div className='flex justify-center'>
                <div className='product-info'>
                    <li><span className='font-bold'>Name:</span> {name}</li>
                    <li><span className='font-bold'>Description:</span> {description}</li>
                    <li><span className='font-bold'>In Stock:</span> {quantity}</li>
                    <li><span className='font-bold'>Supplier:</span> {supplier}</li>
                    <li><span className='font-bold'>Price:</span> {price} BDT</li>
                    <button onClick={() => navigateToInventoryDetails(_id)} className='mt-3 update-btn-style'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default HomeInventories;