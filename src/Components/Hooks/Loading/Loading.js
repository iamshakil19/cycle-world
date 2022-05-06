import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='loading-container'>
            <div className="ball-parent">
                <div className="blue ball"></div>
                <div className="red ball"></div>
                <div className="yellow ball"></div>
                <div className="green ball"></div>
            </div>
        </div>
    );
};

export default Loading;