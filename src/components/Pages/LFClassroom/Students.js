import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router';
import hey from "../../../assets/hey.png"
import auth from '../../../firebase.init';

const Students = () => {
    const [user] = useAuthState(auth)
    const location = useLocation();
    console.log(location);


    return (
        <div className='text-gray-700'>
            <div className='flex flex-col items-center justify-center mt-20'>
                <img className='w-60 my-5' src={hey} alt="" />
                <h2 className='text-2xl my-2 font-bold'>Welcome, <span className='text-rose-600'>{user.displayName}!</span></h2>
                <h4 className='text-xl'>Let's add students to your class.</h4>
                <label for="my-modal-6" className="btn bg-accent my-5 border-0 text-white rounded-full w-44 hover:bg-white hover:text-accent hover:border-accent hover:border-2 modal-button">Add Students</label>


                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle bg-transparent ">
                    <div className="modal-box">
                        <h3 className="font-bold text-2xl text-center">Invite your students via link!</h3>
                        <p className="py-8">They'll create or connect a Language Fixer account and be added directly to your classroom...!</p>
                        <div className="mockup-code bg-accent text-center">
                            <pre><code>https://language-fixer.vercel.app{location.pathname}</code></pre>
                        </div>
                        <div className="modal-action">
                            <label for="my-modal-6" className="btn bg-accent border-0 text-white rounded-full w-44 hover:bg-white hover:text-accent hover:border-accent hover:border-2">Done</label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Students;