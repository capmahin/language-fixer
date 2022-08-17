import React from 'react';
import { NavLink } from 'react-router-dom';
import americaFlag from '../../../assets/united-states.png'

const LFClassroom = () => {
    return (
        <div>
            <div>
                <div class="">
                    <div class="drawer-side bg-gray-200 w-1/4 h-screen">
                        <h2 className='text-xl text-center pt-4 text-accent'><span className='font-bold'>Language Fixer</span> for school</h2>
                        <ul class="menu p-4 overflow-y-auto w-80 text-white">
                            <li><img className='w-20' src={americaFlag} alt="" /><p>English</p></li>
                            <NavLink to="/" className='btn btn-outline' >Home</NavLink>
                            <li><a>Sidebar Item 2</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LFClassroom;