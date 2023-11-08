
import { Link, NavLink } from 'react-router-dom';
import "./header.css"
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    const [showProfie,setShowProfile] = useState(false)
    const handleLogout = () => {
        logOut()
            .then(() => console.log('Logged out successfully'))
            .catch((error) => console.log('an error occurred'))
    }
    if (loading) {
        return <p>loading</p>
    }
    const handleMyProfile = () => {
        setShowProfile(!showProfie)
    }
    const hideMenu = ()=>{
        setShowProfile(false)
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
            <div className='flex items-center gap-5 relative'>
                <div style={ {position: 'absolute', zIndex: '10'}} className={showProfie?'showprofile':'hideProfile'}>
                    <ul className="menu bg-base-200 w-56 rounded-box">
                        <li onClick={hideMenu}><a><Link to={'/myitems'}>My added items</Link></a></li>
                        <li onClick={hideMenu}><a><Link to={'/additem'}>Add a food item</Link></a></li>
                        <li onClick={hideMenu}><a><Link to={'/myorderitems'}>My order items</Link></a></li>
                    </ul>
                </div>


                {user ? <div onClick={handleMyProfile} className='flex items-center'><img className=" hover:cursor-pointer mr-2 rounded-full w-6 h-6 md:w-8 md:h-8 lg:h-8 lg:w-8 ml-2 " src={`${user.photoURL}`}></img><button className="btn btn-sm btn-outline text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]" onClick={handleLogout}>LogOut</button></div> : <button className="btn btn-sm btn-outline text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]" ><Link to='/login'>Login</Link></button>}
            </div>
        </div>
    );
};

export default Header;