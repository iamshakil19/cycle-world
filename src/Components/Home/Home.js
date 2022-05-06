import React from 'react';
import Inventory from '../Inventory/Inventory';
import Slider from '../Slider/Slider';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;