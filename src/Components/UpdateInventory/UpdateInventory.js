import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateInventory.css'
import toast from 'react-hot-toast';
import { nameSliceText } from '../Utilites/Utilites';


const UpdateInventory = () => {
    const { inventoryId } = useParams()
    const [inventory, setInventory] = useState({})
    const [isReload, setIsReload] = useState(false)
    const { img, _id, email, name, description, quantity, price, supplier } = inventory;

    useEffect(() => {
        const url = `https://arcane-island-70615.herokuapp.com/products/${inventoryId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [isReload])

    const handleUpdateQuantity = event => {
        event.preventDefault()
        const quantity = event.target.quantity.value
        const url = `https://arcane-island-70615.herokuapp.com/products/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsReload(!isReload)
                toast.success("Quantity Updated Successfully!!")
                event.target.reset()
            })
    }

    const handleDeliveryButton = async () => {
        const url = `https://arcane-island-70615.herokuapp.com/delivery/${inventoryId}`;
        await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsReload(!isReload)
                toast.success("Delivery Success!!")
            })
    }
    return (
        <div className='update-container'>
            <img src={img} alt="" />
            <div className='flex justify-center'>
                <div className='product-info px-4'>
                    <li><span className='font-bold'>Id: </span>{_id}</li>
                    <li><span className='font-bold'>Email: </span>{email}</li>
                    <li><span className='font-bold'>Name: </span>{name}</li>
                    <li className='w-96 text-justify'><span className='font-bold'>Description:</span> {description}</li>
                    <li><span className='font-bold'>In Stock:</span> <span className='text-lg text-blue-600'>{quantity}</span></li>
                    <li><span className='font-bold'>Supplier:</span> {supplier}</li>
                    <li><span className='font-bold'>Price:</span> <span className='text-lg text-blue-600'>{price}</span> <strong>BDT</strong></li>
                </div>
            </div>

            <div className='text-center my-4'>
                <button onClick={handleDeliveryButton} className='submit-btn-style'>Delivered</button>
            </div>

            <form onSubmit={handleUpdateQuantity} className='text-center'>
                <input className='stock-input-style' type="number" name="quantity" min={1} required placeholder='Quantity' />
                <input className='submit-btn-style' type="submit" value="Update Stock" />
            </form>
        </div>
    );
};

export default UpdateInventory;