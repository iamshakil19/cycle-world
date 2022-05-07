import React, { useState } from 'react';
import './MyItems.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UseInventories from '../Hooks/UseInventories';
import toast from 'react-hot-toast';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const userEmail = user?.email
    const [inventories, setInventories] = UseInventories()
    const filterItems = inventories.filter(items => items.email === userEmail)

    const handleDeleteItem = _id => {
        const confirm = window.confirm("Are you sure you want to delete?")
        if (confirm) {
            const url = `https://arcane-island-70615.herokuapp.com/products/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Item deleted successfully")
                        const remainingItems = inventories.filter(inventory => inventory._id !== _id)
                        setInventories(remainingItems)
                    }
                })
        }

    }



    return (
        <div className='mb-14'>
            <div>
                <h2 className='text-center text-2xl font-bold my-5'>My Items</h2>
                <div className='table-head container mx-auto'>
                    <p className='text-lg ml-5 font-bold'>ID</p>
                    <p className='text-lg ml-5 font-bold'>Name</p>
                    <p className='text-lg ml-5 font-bold'>Email</p>
                    <p className='text-lg ml-5 font-bold'>Price</p>
                    <p className='text-lg ml-5 font-bold'>Quantity</p>
                    <p className='text-lg ml-5 font-bold'>Action</p>
                </div>
                <div className=''>
                    {
                        filterItems.map(filterMyItems => <MyItem
                            key={filterMyItems._id}
                            filterMyItems={filterMyItems}
                            handleDeleteItem={handleDeleteItem}
                        ></MyItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;