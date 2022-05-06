import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateInventory.css'
import toast from 'react-hot-toast';


const UpdateInventory = () => {
    const { inventoryId } = useParams()
    const [inventory, setInventory] = useState({})
    const { img, _id, name, description, quantity, price, supplier } = inventory;

    useEffect(() => {
        const url = `http://localhost:5000/products/${inventoryId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])

    const handleUpdateQuantity = event => {
        event.preventDefault()
        const quantity = event.target.quantity.value
        const url = `http://localhost:5000/products/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({quantity})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Quantity Updated Successfully!!")
                event.target.reset()
            })
    }
    return (
        <div className='update-container'>
            <img src={img} alt="" />
            <div className='flex justify-center'>
                <div className='product-info px-4'>
                    <li><span className='font-bold'>Id: </span>{_id}</li>
                    <li><span className='font-bold'>Name: </span>{name}</li>
                    <li><span className='font-bold'>Description:</span> {description}</li>
                    <li><span className='font-bold'>In Stock:</span> <span className='text-lg text-blue-600'>{quantity}</span></li>
                    <li><span className='font-bold'>Supplier:</span> {supplier}</li>
                    <li><span className='font-bold'>Price:</span> <span className='text-lg text-blue-600'>{price}</span> <strong>BDT</strong></li>
                </div>
            </div>

            <div className='text-center my-4'>
                <button className='submit-btn-style'>Delivered</button>
            </div>

            <form onSubmit={handleUpdateQuantity} className='text-center'>
                <input className='stock-input-style' type="number" name="quantity" min={1} required placeholder='Quantity' />
                <input className='submit-btn-style' type="submit" value="Update Stock" />
            </form>
        </div>
    );
};

export default UpdateInventory;