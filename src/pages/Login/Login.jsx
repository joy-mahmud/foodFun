
import 'react-toastify/dist/ReactToastify.css';
import glicon from '../../../public/images/google 1.svg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(() => {
              
                e.target.reset()
                toast("logged in successfully")
                setTimeout(function() {
                    navigate(location?.state?location.state:"/")
                  }, 1500);

            })
            .catch(() =>{
                toast("Email or password doesn't match")
            })


    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                toast("logged in successfully")
                setTimeout(function() {
                    navigate(location?.state?location.state:"/")
                  }, 1500);
                console.log(res.user)
            })
          .catch(()=>toast("something goes wrong!"))
           
    }
    return (
        <div className=" flex justify-center min-h-screen bg-base-200">
            <div className=" lg:w-1/3 flex-col lg:flex-row items-center justify-center">
                <h2 className='text-center my-5 text-4xl font-bold'>login now</h2>
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <button className="btn btn-outline w-full mt-3 text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]">LogIn</button>

                        </div>
                    </form>
                    <div className='flex flex-col justify-center px-8 items-center mb-5'>
                        <div className='w-full mb-3'><button onClick={handleGoogleSignIn} className="btn btn-outline w-full text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]"><img src={glicon} alt="" />Continue with Google</button>
                        </div>
                        <p>Dont have an acount? <Link to="/signup" className='text-[#0DA3D6]'>Sign up</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;