import React from 'react';
const NotFound = () => {
    return (
        <div className='text-center mt-40'>
            <h2 className='text-5xl font-bold sm:text-9xl mb-4 text-zinc-700'>404</h2>
            <p className='text-xl sm:text-4xl font-medium mb-4 text-zinc-700'>Not Found</p>
            <p className='px-5'>The resource requested could not be found on this server!</p>
        </div>
    );
};

export default NotFound;