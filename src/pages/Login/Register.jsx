
import { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import axios from 'axios';
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [msg, setmsg] = useState('')
    const handleSignup = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoUrl = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value

        const uppercase = /[A-Z]/;
        const SpecialChar = /[\W_]/;

        if (!uppercase.test(password)) {

            return setmsg("PLease enter at least one uppercase letter In the password")
        } else if (!SpecialChar.test(password)) {
            return setmsg("Password should have at least one special character")
        } else {
            createUser(email, password)
                .then(async() => {
                    e.target.reset()
                    const userInfo ={
                        name:name,
                        email:email
                    }
                    const response = await axios.post('http://localhost:5000/users',userInfo)
                    console.log(response.data)
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: photoUrl
                        // 'https://lh3.googleusercontent.com/a/ACg8ocJJEZLnEox1Chk5f8VQYs_WnuYV9g-62ztg54lxpBl-Cg=s96-c'
                    }).then(() => {
                        console.log("Profile updated successfully")
                    }).catch(() => {

                    });
                    toast("you registered successfully")
                    setTimeout(function () {
                        navigate(location?.state ? location.state : "/")
                    }, 1000);

                })
                .catch(() => setmsg("password should be at least 6 characters"))
        }

    }
    return (
        <div className=" flex justify-center min-h-screen bg-base-200">
            <div className=" lg:w-1/3 flex-col lg:flex-row items-center justify-center">
                <h2 className='text-center my-5 text-4xl font-bold'>Signup now</h2>
                <div className="card w-full shadow-2xl bg-base-100 mb-5">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photoUrl" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <button className="btn btn-outline w-full mt-3 text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]">Sign Up</button>
                            <div className='flex flex-col justify-center items-center gap-5 mt-5'>

                                <p>Already have an account? <Link to="/login" className='text-[#0DA3D6]'>Login</Link></p>
                            </div>
                            <p>{msg}</p>
                            <ToastContainer></ToastContainer>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;