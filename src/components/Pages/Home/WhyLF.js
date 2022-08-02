import React from 'react';
import brain from '../../../assets/brain.svg'
import people from '../../../assets/people.svg'
import rocket from '../../../assets/rocket.svg'
import phone from '../../../assets/phone.svg'
import borderWhite from "../../../assets/borderWhite.png"
import underline from '../../../assets/underline.png'

const WhyLF = () => {
    return (
        <div className='bg-gray-50 text-slate-800 py-20'>
            <div className='mt-12 mb-10'>
                <h2 className='text-center font-black text-4xl px-4 '>Why Language Fixer?</h2>
                <img className='mx-auto mt-1' src={underline} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center content-center'>
                <div className="w-60 mb-10 rounded-lg">
                    <div className='bg-cyan-300 flex justify-center py-8 rounded-lg'>
                        <img src={brain} alt="Shoes" className="rounded-xl" />
                    </div>
                    <h2 className="text-xl font-bold px-1">Proven memory techniques rooted in science</h2>
                </div>
                <div className="w-60 mb-10 rounded-lg">
                    <div className='bg-purple-300 flex justify-center py-8 rounded-lg'>
                        <img src={phone} alt="Shoes" className="rounded-xl" />
                    </div>
                    <h2 className="text-xl font-bold px-1">Twice as fast as learning in a regular classroom setting</h2>
                </div>
                <div className="w-60 mb-10 rounded-lg">
                    <div className='bg-emerald-300 flex justify-center py-8 rounded-lg'>
                        <img src={people} alt="Shoes" className="rounded-xl" />
                    </div>
                    <h2 className="text-xl font-bold px-1">Immersive learning. Learn like you live there.</h2>
                </div>
                <div className="w-60 mb-10 rounded-lg">
                    <div className='bg-red-200 flex justify-center py-8 rounded-lg'>
                        <img src={rocket} alt="Shoes" className="rounded-xl" />
                    </div>
                    <h2 className="text-xl font-bold px-1">Cover everything from holiday essentials to longer-term goals</h2>
                </div>
            </div>
            <img className='mt-16 absolute' src={borderWhite} alt="" />
        </div>
    );
};

export default WhyLF;