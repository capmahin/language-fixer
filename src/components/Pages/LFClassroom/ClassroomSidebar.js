import React from 'react';
import { NavLink } from 'react-router-dom';
import americaFlag from '../../../assets/united-states.png'
import newclass from '../../../assets/newclass.svg'
import privacy from '../../../assets/privacy.svg'
import help from '../../../assets/help.svg'

const ClassroomSidebar = () => {
    return (
        <div>

            <h2 className='text-xl text-center pt-4 text-accent'><span className='font-bold'>Language Fixer</span> for school</h2>
            <ul className="menu p-4 overflow-y-auto w-44 lg:w-80 ">
                <li >
                    <div className='flex mx-auto'>
                        <img className='w-10 rounded-xl ' src={americaFlag} alt="" />
                        <p className='font-bold text-sky-600'>English</p>
                    </div>
                </li>
                <NavLink to="/" className='btn btn-outline border-0 my-2 text-base text-gray-500' ><img className='mr-2' src={newclass} alt="" /> New Class</NavLink>
                <NavLink to="/" className='btn btn-outline border-0 my-2 text-base text-gray-500' ><img className='mr-2' src={privacy} alt="" />Privacy Setting</NavLink>
                <NavLink to="/" className='btn btn-outline border-0 my-2 text-base text-gray-500' ><img className='mr-2' src={help} alt="" />Language Fixer</NavLink>

            </ul>
        </div>
    );
};

export default ClassroomSidebar;