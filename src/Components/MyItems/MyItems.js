import React, { useState } from 'react';
import './MyItems.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Hooks/Loading/Loading';
import UseInventories from '../Hooks/UseInventories';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const userEmail = user?.email
    const [inventories, setInventories] = UseInventories()
    const [myInventories, setMyInventories] = useState([])

    if (user) {
        const filterItems = inventories.filter(items => console.log(items))
        setMyInventories(filterItems)
    }
    return (
        <div>
            {/* {
                myInventories.map(myItems => console.log(myItems))
            } */}
        </div>
    );
};

export default MyItems;