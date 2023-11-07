
import {  NavLink } from 'react-router-dom';
import "./header.css"
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogout =()=>{
        logOut()
        .then(()=>console.log('Logged out successfully'))
        .catch((error)=>console.log('an error occurred'))
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
            
            {user?<button className="btn btn-sm btn-outline text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]" onClick={handleLogout}>LogOut</button>:<button className="btn btn-sm btn-outline text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]" ><NavLink to='/login'>Login</NavLink></button>}
            </div>
        </div>
    );
};

export default Header;