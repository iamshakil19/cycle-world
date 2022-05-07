import React from 'react';
import './MyBarChart.css'
import { Bar, BarChart, Legend, Tooltip, XAxis } from 'recharts';
import UseInventories from '../Hooks/UseInventories';


const MyBarChart = () => {
    const [inventories, setInventories] = UseInventories()
    return (
        <div>
            <h2 className='text-center font-bold mb-5 font-serif'>Investment vs Revenue</h2>
            <BarChart width={600} height={300} data={inventories}>
                <Bar dataKey={"investment"}></Bar>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <XAxis dataKey={"month"}></XAxis>
            </BarChart>
        </div>
    );
};

export default MyBarChart;