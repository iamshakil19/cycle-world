import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams()
    const [inventory, setInventory] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/products/${inventoryId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data))
    }, [])
    return (
        <div className=''>
            <h2>this is inventory name: {inventory.name}</h2>
            {
                console.log(inventory)
            }
        </div>
    );
};

export default InventoryDetails;