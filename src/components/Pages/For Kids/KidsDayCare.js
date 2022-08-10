import React from 'react';
import dayCareBG from '../../../assets/For Kids/dayCareBG.png'
import DayCareCloud from '../../../assets/For Kids/DayCareCloud.png'
import DayCareChildren from '../../../assets/For Kids/DayCareChildren.png'

const KidsDayCare = () => {
    return (
        <div style={{ backgroundImage: `url(${dayCareBG})` }} className="py-96 bg-accent bg-center relative">

            <div className=''>
                <img className='w-2/6 absolute left-1/4 ml-28 top-60  -mt-24' src={DayCareChildren} alt="cloud" />
                <img className='w-2/6 absolute left-1/4 ml-28 top-60 ' src={DayCareCloud} alt="cloud" />

                <div className='text-center absolute left-1/4 ml-48 top-80 mt-5'>
                    <h3 className='uppercase text-xl font-semibold pb-2 text-red-600'>Discover Our DayCare</h3>
                    <p className='w-72 text-xs py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consequatur sunt possimus quam similique quidem at iusto modi, accusamus illo, cum excepturi, minus praesentium dicta ex deleniti odio numquam obcaecati!</p>
                    <button className="btn btn-sm bg-accent border-0 text-white rounded-full w-28 hover:bg-white hover:text-accent hover:border-accent hover:border-2 uppercase mx-2">About Us</button>
                    <button className="btn btn-sm bg-accent border-0 text-white rounded-full w-28 hover:bg-white hover:text-accent hover:border-accent hover:border-2 uppercase">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default KidsDayCare;