import React, { useEffect, useState } from 'react';

const UseInventories = () => {
    const [inventories, setInventories] = useState([])

    useEffect(() => {
        fetch('https://arcane-island-70615.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return [inventories, setInventories]
};

export default UseInventories;