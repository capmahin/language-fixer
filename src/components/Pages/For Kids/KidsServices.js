import React from 'react';
import img1 from '../../../assets/For Kids/servicesImg1.jpg'
import img2 from '../../../assets/For Kids/servicesImg2.jpg'
import img3 from '../../../assets/For Kids/servicesImg3.jpg'

const KidsServices = () => {
    return (
        <div className='pt-40 bg-slate-200 px-36'>
            <div className='text-center'>
                <h2 className='text-black font-extrabold text-5xl mb-4'>Our Services</h2>
                <div className='flex justify-center items-center'>
                    <div className=''>
                        <i class="fa-solid fa-grip-lines"></i>
                    </div>
                    <i class="fa-solid fa-graduation-cap text-accent text-2xl"></i>
                    <div>
                        <div class="divider w-14 m-0 p-0 h-1"></div>
                        <div class="divider w-14 m-0 p-0 h-1"></div>
                    </div>
                </div>
            </div>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src={img1} class="max-w-lg rounded-lg shadow-2xl" alt='children' />
                            <div>
                                <h1 class="text-5xl font-bold">Box Office News!</h1>
                                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle ">❮</a>
                        <a href="#slide2" class="btn btn-circle ">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src={img2} class="max-w-lg rounded-lg shadow-2xl" alt='children' />
                            <div>
                                <h1 class="text-5xl font-bold">Box Office News!</h1>
                                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle ">❮</a>
                        <a href="#slide3" class="btn btn-circle ">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row-reverse">
                            <img src={img3} class="max-w-lg rounded-lg shadow-2xl" alt='children' />
                            <div>
                                <h1 class="text-5xl font-bold">Box Office News!</h1>
                                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle ">❮</a>
                        <a href="#slide1" class="btn btn-circle ">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsServices;