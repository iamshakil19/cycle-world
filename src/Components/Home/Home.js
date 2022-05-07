import React from 'react';
import Inventory from '../Inventory/Inventory';
import Progress from '../Progress/Progress';
import Slider from '../Slider/Slider';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Inventory></Inventory>
            <Progress></Progress>
        </div>
    );
};

export default Home;