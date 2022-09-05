import React from 'react';
import child from '../../../assets/For Kids/CHILD-min.png'
import borderImg from '../../../assets/For Kids/banner border.png'
import pen from '../../../assets/For Kids/PAIN-min.png'
import tBorder from '../../../assets/For Kids/Text Border.png'

const KidsBanner = () => {
    return (
        <div className=' '>
            <div className='lg:absolute lg:overflow-hidden '>
                <img className="w-screen rotate-180 lg:-mt-20 bg-yellow-400 -pt-5" src={borderImg} alt="" />
            </div>
            <div className="hero min-h-screen bg-yellow-400">
                <div className="hero-content  lg:p-20">
                    <div className='flex flex-col-reverse lg:flex-row justify-center items-center max-w-xl'>
                        <img src={child} className=" rounded-lg lg:mr-28 mt-20" alt="" />
                        <div >
                            <div className='static lg:absolute mt-10 lg:mt-20 lg:mr-4'>
                                <h2 className='text-7xl font-extrabold font-serif text-white'>Kids School</h2>
                                <img className='mx-auto' src={tBorder} alt="" />
                            </div>
                            <img src={pen} className="hidden absolute lg:static lg:block h-72 lg:max-w-xl rounded-lg mt-72 mr-16" alt="" />
                        </div>
                    </div>
                </div>
                <div className='absolute lg:mt-56 hidden lg:block'>
                    <img className="w-screen lg:mt-80" src={borderImg} alt="" />
                </div>
            </div>
            <div className='text-slate-300 w-80 absolute hidden lg:block -mt-28 ml-16'>
                <h2 className=' text-3xl'>Come {'&'} Learn With Us</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, rerum delectus!</p>
            </div>
        </div>
    );
};

export default KidsBanner;