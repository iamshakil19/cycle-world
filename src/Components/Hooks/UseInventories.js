import React, { useEffect, useState } from 'react';

const UseInventories = () => {
    const [inventories, setInventories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return [inventories, setInventories]
};

export default UseInventories;