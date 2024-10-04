
import { Link, NavLink } from 'react-router-dom';
import "./header.css"
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../hooks/UseCart';
import useAdmin from '../../hooks/useAdmin';
// import { useQuery } from '@tanstack/react-query';



const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    const [isAdmin,adminLoading]=useAdmin()
    const [showProfie, setShowProfile] = useState(false)
     const [data]=useCart()
    // // console.log(cart)
    // const { data=[], isPending } = useQuery({
    //     queryKey: ['cartnumber', user?.email],
    //     queryFn: async () => {
    //         const res = await axios.get(`http://localhost:5000/myCart/${user?.email}`)
    //         return res.data
    //     }
    // })
    console.log(data)
    useEffect(() => {
        const handleOnline = () => {
            setStatus(true)
        }
        const handleOffline = () => {
            setStatus(false)
        }
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)
        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }

    }, [])
    const handleLogout = () => {
        logOut()
            .then(() => {
                setShowProfile(false)
            })
            .catch((error) => console.log('an error occurred'))
    }
    if (loading || adminLoading) {
        return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    const handleMyProfile = () => {
        setShowProfile(!showProfie)
    }
    const hideMenu = () => {
        setShowProfile(false)
    }

    return (
        <div className='flex justify-between items-center my-2 container mx-auto'>
            <h2 className='lg:text-4xl text-2xl font-bold text-[#0DA3D6]'>FoodFun</h2>

            <div>
                <ul className='flex lg:gap-5 gap-1 text-xl font-medium'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/allfoods">All Food</NavLink></li>
                    <li><NavLink to={'/blog'}>Blog</NavLink></li>


                </ul>
            </div>
            <div className='flex items-center gap-5 relative'>
                <div style={{ position: 'absolute', zIndex: '10' }} className={showProfie ? 'showprofile' : 'hideProfile'}>
                    <ul className="menu bg-base-200 w-56 rounded-box">
                        
                        <li onClick={hideMenu}><Link to={'/myorderitems'}>My cart</Link></li>
                        <li onClick={hideMenu}><Link to={'/mytable'}>My Table bookings</Link></li>
                        <li onClick={hideMenu}><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                </div>


                {user ? <div className='flex items-center'>
                    <div className='relative mr-5'>
                        <Link to={'/myorderitems'}>
                            <FaShoppingCart className='text-3xl' />
                            <div className="badge badge-secondary absolute -top-2 -right-4">{data.length}</div>
                        </Link>
                    </div>

                    <img onClick={handleMyProfile} className=" hover:cursor-pointer mr-2 rounded-full w-8 h-8 md:w-8 md:h-8 lg:h-8 lg:w-8 ml-2 relative" src={`${user.photoURL}`}></img>
                    {/* {status ? <div className='w-3 h-3 rounded-full bg-green-500 absolute left-[30px] bottom-0'></div> : ''} */}
                  {isAdmin && <button className="btn btn-sm btn-outline text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6] mr-1" ><Link to='/dashboard/AdminHome'>Dashboard</Link></button>}
                    <button className="btn btn-sm btn-outline text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]" onClick={handleLogout}>LogOut</button></div> : <button className="btn btn-sm btn-outline text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]" ><Link to='/login'>Login</Link></button>}
                  
            </div>
        </div>
    );
};

export default Header;