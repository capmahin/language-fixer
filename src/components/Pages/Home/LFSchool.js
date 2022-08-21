import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classroom from '../../../assets/classroom.png'
import borderWhite from "../../../assets/borderWhite.png";

const LFSchool = () => {

    const navigate = useNavigate()

    const nameRef = useRef('')
    const passRef = useRef('')
    const classRef = useRef('')
    const languageRef = useRef('')

    const [error, setError] = useState("");


    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);
        fetch("http://localhost:5000/classes")
            .then((res) => res.json())
            .then((data) => {
                setClasses(data);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    console.log(classes);

    const handleLoginClassroom = event => {
        event.preventDefault()

        const userName = event.target.username.value
        const password = event.target.password.value

        classes.map(classa => {
            if (classa.instructorName === userName && classa.password === password) {
                alert('login successfully')
                navigate("LFClassroom")
            } else {
                setError("Please enter currect username and password.");
                return false
            }
        }
        )

        console.log(userName, password);


    }


    const handleCreateClassroom = event => {
        event.preventDefault()

        const Name = nameRef.current.value;
        const pass = passRef.current.value
        const classN = classRef.current.value;
        const language = languageRef.current.value;

        if (!Name) {
            setError("Please enter your name.");
            return false
        }
        if (!pass) {
            setError("Please enter a valid password.");
            return false
        }
        if (!classN) {
            setError("Please give a class name.");
            return false
        }
        if (!language) {
            setError("Please select a language for your class.");
            return false
        }
        setError("");

        const lfClass = {
            instructorName: Name,
            password: pass,
            className: classN,
            languageName: language,
            role: "teacher"
        }
        const url = "http://localhost:5000/CreateClass"
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(lfClass)
        })
            .then(res => res.json())
            .then(data => {
                navigate("/LFClassroom")
                console.log(data)
            })


    }


    return (
        <div>
            <div className='min-h-screen flex flex-col-reverse justify-center items-center lg:flex-row bg-gray-50 pt-20 lg:pt-36'>
                <img className='w-72 mb-10' src={classroom} alt="" />
                <div className='w-96 my-16 ml-20'>
                    <h2 className='text-4xl text-gray-800 font-black mb-4'>Bring Language Fixer To Your Classroom</h2>
                    <label for="my-modal-7" className="btn bg-blue-500 border-0 hover:bg-rose-600 font-semibold  text-white">Get Started</label>
                </div>

                <input type="checkbox" id="my-modal-7" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label for="my-modal-7" className="btn btn-xs">X</label>
                        <h3 className="font-bold text-lg">LogIn to your Classroom</h3>
                        <form onSubmit={handleLoginClassroom}>
                            <label className="text-left">Your Name:</label>
                            <input
                                name="username"
                                type="text"
                                className={
                                    "w-full p-2  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <label className="text-left">Your Password:</label>
                            <input
                                name="password"
                                type="password"
                                className={
                                    "w-full p-2  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            {error ? <small className="text-red-600 text-base">{error}</small> : ""}
                            <div className='flex'>
                                <p>Dont have any?</p>
                                <label className='btn btn-sm' for="my-modal-6" >Create One</label>
                            </div>
                            <div className="modal-action">
                                <button type='submit' for={error ? "" : "my-modal-7"} className="btn">LogIn!</button >
                            </div>
                        </form>

                    </div>
                </div>

                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label for="my-modal-6" className="btn btn-xs">X</label>
                        <h3 className="font-bold text-2xl text-center">Create a classroom for your students!</h3>
                        <form>
                            <label className="text-left">Enter Your Name:</label>
                            <input
                                name="username"
                                type="text"
                                ref={nameRef}
                                className={
                                    "w-full p-2  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <label className="text-left">Enter Your Password:</label>
                            <input
                                name="password"
                                type="password"
                                ref={passRef}
                                className={
                                    "w-full p-2  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <label className="text-left">Class Name:</label>
                            <input
                                name="class"
                                type="text"
                                ref={classRef}
                                className={
                                    "w-full p-2  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <label>Select Language:</label>
                            <select
                                className="select  select-accent w-full p-2  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                name="room"
                                ref={languageRef}
                            >
                                <option value="">Select A Language</option>
                                <option value="English">English</option>
                                <option value="Spanish">Spanish</option>
                                <option value="French">French</option>
                                <option value="Chinese">Chinese</option>
                            </select>
                            {error ? <small className="text-red-600 text-base">{error}</small> : ""}
                        </form>
                        <div className="modal-action">
                            <label onClick={handleCreateClassroom} for={error ? "" : "my-modal-6"} className="btn">Create Class</label>
                        </div>
                    </div>
                </div>


            </div>
            <img className="absolute w-screen" src={borderWhite} alt="" />
        </div >
    );
};

export default LFSchool;