import React from 'react';
import borderPrimary from "../../../assets/border primary.png"

const HaveQuestions = () => {
    return (
        <div>
            <div className='flex justify-around items-center my-20'>
                <h2 className='text-3xl font-bold tracking-wide'><span className='text-orange-500'>Have Questions? </span><span className='text-blue-600'> Call </span> <span className='text-lime-500'> 00011115522 </span><span className='text-blue-600'> or </span> <span className='text-lime-500'> 11001100055 </span></h2>
                <button className="btn btn-outline btn-warning rounded-3xl w-44">Contact Us</button>
            </div>
            <img className="absolute w-screen" src={borderPrimary} alt="" />
        </div>
    );
};

export default HaveQuestions;