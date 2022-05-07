import React from 'react';
import { useNavigate } from 'react-router-dom';
import AllItems from '../AllItems/AllItems';
import UseInventories from '../Hooks/UseInventories';
import './ManageItems.css'
import toast from 'react-hot-toast';


const ManageItems = () => {
    const [inventories, setInventories] = UseInventories()

    const handleDeleteItem = _id => {
        const confirm = window.confirm("Are you sure you want to delete?")
        if (confirm) {
            const url = `http://localhost:5000/products/${_id}`;
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
                <h2 className='text-center text-2xl font-bold my-5'>All Items</h2>
                <div className='table-head container mx-auto'>
                    <p className='text-lg ml-5 font-bold'>ID</p>
                    <p className='text-lg ml-5 font-bold'>Name</p>
                    <p className='text-lg ml-5 font-bold'>Email</p>
                    <p className='text-lg ml-5 font-bold'>Price</p>
                    <p className='text-lg ml-5 font-bold'>Quantity</p>
                    <p className='text-lg ml-5 font-bold'>Action</p>
                </div>
                {
                    inventories.map(inventory => <AllItems
                        key={inventory._id}
                        inventory={inventory}
                        handleDeleteItem={handleDeleteItem}
                    ></AllItems>)
                }
            </div>
        </div>
    );
};

export default ManageItems;