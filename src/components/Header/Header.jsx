
import {  Link, NavLink } from 'react-router-dom';
import "./header.css"
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const {user,logOut, loading} = useContext(AuthContext)
    const handleLogout =()=>{
        logOut()
        .then(()=>console.log('Logged out successfully'))
        .catch((error)=>console.log('an error occurred'))
    }
    if(loading){
        return <p>loading</p>
    }
    return (
        <div className='flex justify-between items-center my-2 container mx-auto'>
            <h2 className='text-4xl font-bold text-[#0DA3D6]'>FoodFun</h2>
            <div>
                <ul className='flex gap-5 text-xl font-medium'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/allfoods">All Food</NavLink></li>
                    <li><NavLink to={'/blog'}>Blog</NavLink></li>
                    
                  
                </ul>
            </div>
            <div className='flex items-center gap-5'>
               
            
            {user?<div className='flex items-center'><img className=" hover:cursor-pointer mr-2 rounded-full w-6 h-6 md:w-8 md:h-8 lg:h-8 lg:w-8 ml-2 " src={`${user.photoURL}`}></img><button className="btn btn-sm btn-outline text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]" onClick={handleLogout}>LogOut</button></div> :<button className="btn btn-sm btn-outline text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]" ><Link to='/login'>Login</Link></button>}
            </div>
        </div>
    );
};

export default Header;