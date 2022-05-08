import React from 'react';
import './Progress.css'
const Progress = () => {
    return (
        <div className='text-center my-10'>
            <h2 className='text-xl font-bold text-slate-700 my-5 font-serif'>Our Rating Progress Bar</h2>

            <div className="width mx-auto mb-3 bg-gray-200 rounded-full bg-slate-300">
                <div className="bg-sky-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "95%"}}> 5</div>
            </div>
            <div className="width mx-auto mb-3 bg-gray-200 rounded-full bg-slate-300">
                <div className="bg-sky-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "70%"}}>4</div>
            </div>
            <div className="width mx-auto mb-3 bg-gray-200 rounded-full bg-slate-300">
                <div className="bg-sky-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "25%"}}>3</div>
            </div>
            <div className="width mx-auto mb-3 bg-gray-200 rounded-full bg-slate-300">
                <div className="bg-sky-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "30%"}}>2</div>
            </div>
            <div className="width mx-auto mb-3 bg-gray-200 rounded-full bg-slate-300">
                <div className="bg-sky-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: "5%"}}>1</div>
            </div>

        </div>
    );
};

export default Progress;