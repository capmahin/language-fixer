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

                <label for="my-modal-5" class="btn modal-button">open modal</label>

                <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box w-11/12 max-w-5xl">
                        <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div class="modal-action">
                            <label for="my-modal-5" class="btn">Yay!</label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Students;