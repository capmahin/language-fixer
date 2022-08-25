import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router';
import hey from "../../../assets/hey.png"
import auth from '../../../firebase.init';

const Students = () => {
    const [user] = useAuthState(auth)
    const location = useLocation();
    // console.log(location);

    const [logedInUser, setLogedInUser] = useState([])

    useEffect(() => {
        fetch(`https://young-plains-25750.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setLogedInUser(data))
    }, [])

    console.log(logedInUser.students);

    return (
        <div className='text-gray-700'>
            <div className='flex items-center justify-center mt-20'>
                <div>
                    <img className='w-44 my-5' src={hey} alt="" />
                    <h2 className='text-2xl my-2 font-bold'>Welcome, <span className='text-rose-600'>{user.displayName}!</span></h2>
                </div>
                <div class="overflow-x-auto">
                    <h4 className=''>Students of your classroom</h4>
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>

                            {logedInUser.students?.map((u, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{u.sEmail}</td>
                            </tr>)

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default Students;