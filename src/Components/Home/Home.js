import React from 'react';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
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
            <CustomerInfo></CustomerInfo>
        </div>
    );
};

export default Home;