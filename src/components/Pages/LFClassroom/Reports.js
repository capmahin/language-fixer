import React from 'react';
import pen from '../../../assets/pen.svg'

const Reports = () => {
    return (
        <div className='text-gray-600 flex flex-col items-center justify-center'>
            <img src={pen} alt="" />
            <h2 className='text-xl text-gray-600 font-bold my-2'>ASSIGNMENTS</h2>
            <h4 className='mb-4'>Create a new one or check out this course's assign page to get inspired.</h4>
            <button className='btn bg-accent border-0 text-white rounded-full w-44 hover:bg-white hover:text-accent hover:border-accent hover:border-2'>CREATE NEW</button>
        </div>
    );
};

export default Reports;