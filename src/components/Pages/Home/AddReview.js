import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import borderAccent from "../../../assets/border accent.png"

const Review = () => {
    const [user] = useAuthState(auth)

    const nameRef = useRef('')
    const commentRef = useRef('')

    const handlePostReview = event => {
        event.preventDefault()

        const review = {
            name: nameRef.current.value,
            imageUrl: "https://daisyui.com/tailwind-css-component-profile-3@56w.png",
            comment: commentRef.current.value
        }
        const url = "https://young-plains-25750.herokuapp.com//reviews"
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className='bg-accent text-slate-700 py-12'>
            <div className='w-96 mx-auto mt-14'>
                <h2 className='text-2xl text-center font-bold mb-7'>Add Review!</h2>
                <p className='label-text py-2'>Your Name</p>
                <input ref={nameRef} type="text" name="name" value={user?.displayName || ""} className="input input-bordered w-full " />
                <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Your Thoughts</span>
                    </label>
                    <textarea ref={commentRef} className="textarea textarea-bordered h-24" placeholder="Tell us how we could improve ourselves."></textarea>
                    <button onClick={handlePostReview} className='bg-primary text-gray-50 px-10 py-2 rounded-lg mt-6 hover:bg-slate-700'>Post Comment</button>
                </div>
            </div>
            <img className='pt-12 absolute w-screen' src={borderAccent} alt="" />
        </div>
    );
};

export default Review;