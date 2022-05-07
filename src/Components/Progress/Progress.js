import React from 'react';
import './Progress.css'
const Progress = () => {
    return (
        <div className='text-center my-10'>
            <h2 className='text-xl font-bold text-slate-700 my-5'>Our Rating Progress Bar</h2>
            <div>
                <progress className="progress progress-info width" value="100" max="100"></progress>
                <br />
                <progress className="progress progress-info width" value="85" max="100"></progress>
                <br />
                <progress className="progress progress-info width" value="40" max="100"></progress>
                <br />
                <progress className="progress progress-info width" value="50" max="100"></progress>
                <br />
                <progress className="progress progress-info width" value="5" max="100"></progress>
            </div>
        </div>
    );
};

export default Progress;