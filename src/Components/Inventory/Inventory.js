import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeInventories from '../HomeInventories/HomeInventories';
import UseInventories from '../Hooks/UseInventories';
import './Inventory.css'

const Inventory = () => {

    const navigate = useNavigate()

    const navigateToAllProducts = () => {
        navigate('/manageItems')
    }

    const [inventories, setInventories] = UseInventories()
    const top6inventories = inventories.slice(0, 6)
    return (
        <div className='inventory-container'>
            <h2 className='inventory-text text-zinc-700 my-4'>Inventory</h2>
            <div className='all-products-container'>
                {
                    top6inventories.map(product => <HomeInventories
                        key={product._id}
                        product={product}
                    ></HomeInventories>)
                }
            </div>
            <div className='text-center mt-10'>
                <button onClick={navigateToAllProducts} className='all-inventories-button'>Manage Items</button>
            </div>
        </div>
    );
};

export default Inventory;