import React from 'react';
import dayCareBG from '../../../assets/For Kids/dayCareBG.png'
import Teacher1 from '../../../assets/For Kids/Teacher 1.png'
import Teacher2 from '../../../assets/For Kids/Teacher 2.jpg'
import Teacher3 from '../../../assets/For Kids/Teacher 3.png'
import Teacher4 from '../../../assets/For Kids/Teacher 4.jpg'

const KidsTeachers = () => {
    return (
        <div style={{ backgroundImage: `url(${dayCareBG})` }} className="pt-10 pb-16 bg-sky-200 bg-center h-2/4">
            <div className='text-center'>
                <h2 className='text-primary font-extrabold text-5xl mb-4'>Meet Our Teachers</h2>
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

            <div className="carousel">
                <div className="hero min-h-screen flex text-sm text-center">
                    <div id="slideb1" className="carousel-item relative w-full flex justify-center">
                        <div className="hero-content flex-col">
                            <img src={Teacher1} className=" drop-shadow-2xl bg-white max-w-xs rounded-full ring-offset-2 ring-8 ring-slate-50 shadow-2xl" alt='' />
                            <div className='max-w-xs'>
                                <h1 className="text-xl font-bold py-4">Anne Hathaway</h1>
                                <h1 className="text-base  font-bold text-amber-500">English Teacher</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.</p>
                            </div>
                            <div className='text-lg flex justify-center'>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-facebook-f"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-twitter"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-instagram"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-whatsapp"></i>
                            </div>
                        </div>
                        <div className="hero-content flex-col">
                            <img src={Teacher2} className=" drop-shadow-2xl max-w-xs rounded-full ring-offset-2 ring-8 ring-slate-50 shadow-2xl" alt='' />
                            <div className='max-w-xs'>
                                <h1 className="text-xl font-bold py-4">Winona Ryder</h1>
                                <h1 className="text-base  font-bold text-amber-500">Spanish Teacher</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.</p>
                            </div>
                            <div className='text-lg flex justify-center '>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-facebook-f"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-twitter"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-instagram"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-whatsapp"></i>
                            </div>
                        </div>
                        <div className="hero-content flex-col">
                            <img src={Teacher3} className=" drop-shadow-2xl max-w-xs rounded-full ring-offset-2 ring-8 ring-slate-50 shadow-2xl bg-white" alt='' />
                            <div className='max-w-xs'>
                                <h1 className="text-xl font-bold py-4">Winona Ryder</h1>
                                <h1 className="text-base  font-bold text-amber-500">French Teacher</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.</p>
                            </div>
                            <div className='text-lg flex justify-center '>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-facebook-f"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-twitter"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-instagram"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-whatsapp"></i>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slideb4" className="btn btn-circle bg-amber-500 border-0 text-white">❮</a>
                            <a href="#slideb2" className="btn btn-circle bg-amber-500 border-0 text-white">❯</a>
                        </div>
                    </div>
                    <div id="slideb2" className="carousel-item relative w-full flex justify-center">
                        <div className="hero-content flex-col">
                            <img src={Teacher4} className=" drop-shadow-2xl max-w-xs rounded-full ring-offset-2 ring-8 ring-slate-50 shadow-2xl" alt='' />
                            <div className='max-w-xs'>
                                <h1 className="text-xl font-bold py-4">Emma Watson</h1>
                                <h1 className="text-base  font-bold text-amber-500">Chinese Teacher</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.</p>
                            </div>
                            <div className='text-lg flex justify-center '>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-facebook-f"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-twitter"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-instagram"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-whatsapp"></i>
                            </div>
                        </div>
                        <div className="hero-content flex-col">
                            <img src={Teacher1} className=" drop-shadow-2xl max-w-xs rounded-full ring-offset-2 ring-8 ring-slate-50 shadow-2xl bg-white" alt='' />
                            <div className='max-w-xs'>
                                <h1 className="text-xl font-bold py-4">Anne Hathaway</h1>
                                <h1 className="text-base  font-bold text-amber-500">English Teacher</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.</p>
                            </div>
                            <div className='text-lg flex justify-center '>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-facebook-f"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-twitter"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-instagram"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-whatsapp"></i>
                            </div>
                        </div>
                        <div className="hero-content flex-col">
                            <img src={Teacher2} className=" drop-shadow-2xl max-w-xs rounded-full ring-offset-2 ring-8 ring-slate-50 shadow-2xl" alt='' />
                            <div className='max-w-xs'>
                                <h1 className="text-xl font-bold py-4">Winona Ryder</h1>
                                <h1 className="text-base  font-bold text-amber-500">Spanish Teacher</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.</p>
                            </div>
                            <div className='text-lg flex justify-center '>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-facebook-f"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-twitter"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-instagram"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-whatsapp"></i>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slideb1" className="btn btn-circle bg-amber-500 border-0 text-white">❮</a>
                            <a href="#slideb3" className="btn btn-circle bg-amber-500 border-0 text-white">❯</a>
                        </div>
                    </div>
                    <div id="slideb3" className="carousel-item relative w-full flex justify-center">
                        <div className="hero-content flex-col">
                            <img src={Teacher3} className=" drop-shadow-2xl max-w-xs rounded-full ring-offset-2 ring-8 ring-slate-50 shadow-2xl bg-white" alt='' />
                            <div className='max-w-xs'>
                                <h1 className="text-xl font-bold py-4">Winona Ryder</h1>
                                <h1 className="text-base  font-bold text-amber-500">French Teacher</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.</p>
                            </div>
                            <div className='text-lg flex justify-center '>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-facebook-f"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-twitter"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-instagram"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-whatsapp"></i>
                            </div>
                        </div>
                        <div className="hero-content flex-col">
                            <img src={Teacher4} className=" drop-shadow-2xl max-w-xs rounded-full ring-offset-2 ring-8 ring-slate-50 shadow-2xl" alt='' />
                            <div className='max-w-xs'>
                                <h1 className="text-xl font-bold py-4">Emma Watson</h1>
                                <h1 className="text-base  font-bold text-amber-500">Chinese Teacher</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.</p>
                            </div>
                            <div className='text-lg flex justify-center '>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-facebook-f"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-twitter"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-instagram"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-whatsapp"></i>
                            </div>
                        </div>
                        <div className="hero-content flex-col">
                            <img src={Teacher1} className=" drop-shadow-2xl max-w-xs rounded-full ring-offset-2 ring-8 ring-slate-50 shadow-2xl bg-white" alt='' />
                            <div className='max-w-xs'>
                                <h1 className="text-xl font-bold py-4">Anne Hathaway</h1>
                                <h1 className="text-base  font-bold text-amber-500">English Teacher</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.</p>
                            </div>
                            <div className='text-lg flex justify-center '>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-facebook-f"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-twitter"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-instagram"></i>
                                <i className="pt-2 mr-1 drop-shadow-xl border-4 bg-amber-500 text-white hover:text-amber-500 hover:bg-white hover:border-sky-200 rounded-full w-10 h-10 text-center fa-brands fa-whatsapp"></i>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slideb2" className="btn btn-circle bg-amber-500 border-0 text-white">❮</a>
                            <a href="#slideb1" className="btn btn-circle bg-amber-500 border-0 text-white">❯</a>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default KidsTeachers;