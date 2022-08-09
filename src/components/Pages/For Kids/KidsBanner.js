import React from 'react';
import child from '../../../assets/For Kids/CHILD-min.png'
import borderImg from '../../../assets/For Kids/banner border.png'
import pen from '../../../assets/For Kids/PAIN-min.png'
import tBorder from '../../../assets/For Kids/Text Border.png'

const KidsBanner = () => {
    return (
        <div className=' '>
            <div className='absolute overflow-hidden'>
                <img className="w-screen rotate-180 -mt-20 " src={borderImg} alt="" />
            </div>
            <div className="hero min-h-screen bg-yellow-400">
                <div className="hero-content flex-col lg:flex-row-reverse p-20">
                    <div className='flex justify-center items-center'>
                        <img src={child} className="max-w-xs lg:max-w-xl rounded-lg lg:mr-28 mt-20" alt="" />
                        <div >
                            <div className='absolute mt-20 mr-4'>
                                <h2 className='text-7xl font-extrabold font-serif text-white'>Kids School</h2>
                                <img className='mx-auto' src={tBorder} alt="" />
                            </div>
                            <img src={pen} className="h-72 lg:max-w-xl rounded-lg mt-72 mr-16" alt="" />
                        </div>
                    </div>
                    <div className="px-12">
                    </div>
                </div>
                <div className='absolute mt-56'>
                    <img className="w-screen mt-80" src={borderImg} alt="" />
                </div>
            </div>
            <div className='text-slate-300 w-80 absolute -mt-28 ml-16'>
                <h2 className=' text-3xl'>Come {'&'} Learn With Us</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, rerum delectus!</p>
            </div>
        </div>
    );
};

export default KidsBanner;