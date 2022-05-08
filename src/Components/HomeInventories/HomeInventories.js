import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeInventories.css'
import { descriptionSliceText, nameSliceText } from '../Utilites/Utilites';

const HomeInventories = ({ product }) => {
    const navigate = useNavigate()
    const navigateToInventoryDetails = (_id) => {
        navigate(`/inventory/${_id}`)
    }
    const { img, name, _id, description, price, quantity, supplier } = product
    return (
        <div className='product-style'>
            <img src={img} alt="" />
            <div className='flex justify-center'>
                <div className='product-info p-6'>
                    <li><span className='font-bold'>Name: </span>{nameSliceText(name)}</li>
                    <li><span className='font-bold'>Description:</span> {descriptionSliceText(description)}</li>
                    <li><span className='font-bold'>In Stock:</span> <span className='text-lg text-blue-600'>{quantity}</span></li>
                    <li><span className='font-bold'>Supplier:</span> {supplier}</li>
                    <li><span className='font-bold'>Price:</span> <span className='text-lg text-blue-600'>{price}</span> <strong>BDT</strong></li>
                    <button onClick={() => navigateToInventoryDetails(_id)} className='mt-3 update-btn-style'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default HomeInventories;