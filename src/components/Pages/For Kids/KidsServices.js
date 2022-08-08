import React from 'react';
import img1 from '../../../assets/For Kids/servicesImg1.jpg'
import img2 from '../../../assets/For Kids/servicesImg2.jpg'
import img3 from '../../../assets/For Kids/servicesImg3.jpg'
import img4 from '../../../assets/For Kids/servicesImg4.jpg'

const KidsServices = () => {
    return (
        <div>
            <div className='pt-40 bg-slate-200 px-28'>
                <div className='text-center'>
                    <h2 className='text-black font-extrabold text-5xl mb-4'>Our Services</h2>
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
                    <p className='text-slate-500 font-thin'>We make your child happy day after day</p>
                </div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item w-full">
                        <div className="hero min-h-min">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src={img1} className="max-w-md rounded-lg shadow-2xl" alt='children' />
                                <div>
                                    <h1 className=" font-bold text-lg"><span className='text-5xl text-accent font-semibold'>E</span>nglish Lessons</h1>
                                    <p className="py-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                    <button className="btn bg-accent border-0 text-white rounded-full w-44 hover:bg-white hover:text-accent hover:border-accent hover:border-2">Read More</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div id="slide2" className="carousel-item w-full">
                        <div className="hero min-h-screen">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src={img2} className="max-w-md rounded-lg shadow-2xl" alt='children' />
                                <div>
                                    <h1 className=" font-bold text-lg"><span className='text-5xl text-accent font-semibold'>S</span>panish Lessons</h1>
                                    <p className="py-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                    <button className="btn bg-accent border-0 text-white rounded-full w-44 hover:bg-white hover:text-accent hover:border-accent hover:border-2">Read More</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div id="slide3" className="carousel-item w-full">
                        <div className="hero min-h-screen">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src={img3} className="max-w-md rounded-lg shadow-2xl" alt='children' />
                                <div>
                                    <h1 className=" font-bold text-lg"><span className='text-5xl text-accent font-semibold'>F</span>rench Lessons</h1>
                                    <p className="py-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                    <button className="btn bg-accent border-0 text-white rounded-full w-44 hover:bg-white hover:text-accent hover:border-accent hover:border-2">Read More</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div id="slide4" className="carousel-item w-full">
                        <div className="hero min-h-screen">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src={img4} className="max-w-md rounded-lg shadow-2xl" alt='children' />
                                <div>
                                    <h1 className=" font-bold text-lg"><span className='text-5xl text-accent font-semibold'>C</span>hinese Lessons</h1>
                                    <p className="py-6">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                                    <button className="btn bg-accent border-0 text-white rounded-full w-44 hover:bg-white hover:text-accent hover:border-accent hover:border-2">Read More</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center gap-2 -mt-20">
                <a href="#slide1" class="btn btn-xs">1</a>
                <a href="#slide2" class="btn btn-xs">2</a>
                <a href="#slide3" class="btn btn-xs">3</a>
                <a href="#slide4" class="btn btn-xs">4</a>
            </div>

        </div>
    );
};

export default KidsServices;