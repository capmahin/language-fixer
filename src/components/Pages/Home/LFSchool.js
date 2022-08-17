import React from 'react';
import { Link } from 'react-router-dom';
import classroom from '../../../assets/classroom.png'
import borderWhite from "../../../assets/borderWhite.png";

const LFSchool = () => {
    return (
        <div>
            <div className='min-h-screen flex flex-col-reverse justify-center items-center lg:flex-row bg-gray-50 pt-20'>
                <div className='w-96 my-16'>
                    <h2 className='text-4xl text-gray-800 font-black mb-4'>Bring Language Fixer To Your Classroom</h2>
                    <Link to="/LFClassroom" class="btn bg-blue-500 border-0 hover:bg-rose-600 font-semibold  text-white">Get Started</Link>
                </div>
                <img className='w-72 mb-10' src={classroom} alt="" />
            </div>
            <img className="absolute w-screen" src={borderWhite} alt="" />
        </div>
    );
};

export default LFSchool;