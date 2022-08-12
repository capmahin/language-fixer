import React from 'react';
import facilitiesBG from '../../../assets/For Kids/FacilitiesBG.jpg'
import facilitiesChar from '../../../assets/For Kids/FacilitiesChar.png'

const KidsFacilities = () => {
    return (
        <div style={{ backgroundImage: `url(${facilitiesBG})` }} className="pt-10 pb-16">
            <div className='text-center'>
                <h2 className='text-black font-extrabold text-5xl mb-4'>Our Facilities</h2>
                <div className='flex justify-center items-center'>
                    <div>
                        <div className="w-14 border-t border-accent pb-1 mr-1"></div>
                        <div className="w-14 border-t border-accent mr-1"></div>
                    </div>
                    <i className="fa-solid fa-graduation-cap text-accent text-2xl px-1"></i>
                    <div>
                        <div className="w-14 border-t border-accent pb-1"></div>
                        <div className="w-14 border-t border-accent"></div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img className='min-w-fit pr-10' src={facilitiesChar} alt="facilities char" />
                    </div>
                    <div className='grid grid-cols-2 gap-4 mt-10'>
                        <div className='flex justify-center items-center '>
                            <i className="fa fa-headphones text-3xl text-blue-500 border-spacing-2 border w-16 h-16 rounded-full border-blue-500 bg-slate-50 text-center p-3 hover:ring-offset-2 hover:ring-4 hover:ring-blue-300" ></i>
                            <div className='w-80 p-8'>
                                <h3 className='text-2xl pb-2 font-semibold tracking-wide text-blue-600 cursor-pointer'>Music Classes</h3>
                                <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos hic excepturi quae voluptas eligendi quibusdam. Hic velit nemo omnis excepturi!</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center '>
                            <i className="fa fa-rocket text-3xl text-lime-500 border-spacing-2 border w-16 h-16 rounded-full border-lime-500 bg-slate-50 text-center p-3 hover:ring-offset-2 hover:ring-4 hover:ring-lime-300" ></i>
                            <div className='w-80 p-8'>
                                <h3 className='text-2xl pb-2 font-semibold tracking-wide text-lime-500 cursor-pointer'>Playing Science</h3>
                                <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos hic excepturi quae voluptas eligendi quibusdam. Hic velit nemo omnis excepturi!</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center '>
                            <i className="fa fa-bell text-3xl text-accent border-spacing-2 border w-16 h-16 rounded-full border-accent bg-slate-50 text-center p-3 hover:ring-offset-2 hover:ring-4 hover:ring-yellow-300" ></i>
                            <div className='w-80 p-8'>
                                <h3 className='text-2xl pb-2 font-semibold tracking-wide text-accent cursor-pointer'>Sleep Center</h3>
                                <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos hic excepturi quae voluptas eligendi quibusdam. Hic velit nemo omnis excepturi!</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center '>
                            <i className="fa fa-bullhorn text-3xl text-sky-500 border-spacing-2 border w-16 h-16 rounded-full border-sky-500 bg-slate-50 text-center p-3 hover:ring-offset-2 hover:ring-4 hover:ring-sky-300" ></i>
                            <div className='w-80 p-8'>
                                <h3 className='text-2xl pb-2 font-semibold tracking-wide text-sky-500 cursor-pointer'>Quality Lessons</h3>
                                <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos hic excepturi quae voluptas eligendi quibusdam. Hic velit nemo omnis excepturi!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsFacilities;