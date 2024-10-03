
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import useAdmin from '../../hooks/useAdmin';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Dashboard = () => {
    const [isAdmin, adminLoading] = useAdmin()
    const { user,loading,logOut } = useContext(AuthContext)
    if (loading || adminLoading) {
        return
    }
    return (
        <div>
            <div className='w-full h-[80px] bg-[#363636]'>
                {/* <Header></Header> */}
                <h2 className='text-center text-orange-500 font-bold text-[40px]'>FoodFun admin panel</h2>
            </div>
            <div className='flex border-t-[1px] border-t-white'>
                <div className='min-h-screen w-56 bg-[#363636]'>
                    <div className='text-center'><p className='text-white font-bold text-2xl'>{user?.displayName}</p></div>

                    {
                        isAdmin ? (<ul className='p-3 flex flex-col gap-3'>
                            <li className='w-full text-center bg-orange-500 text-white py-2 rounded-[20px] text-xl font-medium'><NavLink to={'/'}>Home</NavLink></li>
                            <li className='w-full text-center bg-orange-500 text-white py-2 rounded-[20px] text-xl font-medium'><NavLink to={'/dashboard/adminHome'} className={({isActive})=>isActive?'text-black':'text-white'}>All orders</NavLink></li>
                            <li className='w-full text-center bg-orange-500 text-white py-2 rounded-[20px] text-xl font-medium'><NavLink to={'/dashboard/allUsers'} className={({isActive})=>isActive?'text-black':'text-white'}>All users</NavLink></li>
                            <li className='w-full text-center bg-orange-500 text-white py-2 rounded-[20px] text-xl font-medium'><button onClick={logOut} >logout</button></li>
                        </ul>):(
                            <ul className='p-3 flex flex-col gap-3'>
                            <li className='w-full text-center bg-orange-500 text-white py-2 rounded-[20px] text-xl font-medium'><NavLink to={'/'}>Home</NavLink></li>
                            <li className='w-full text-center bg-orange-500 text-white py-2 rounded-[20px] text-xl font-medium'><NavLink to={'/myOrders'} className={({isActive})=>isActive?'text-black':'text-white'}>My orders</NavLink></li>
                            <li className='w-full text-center bg-orange-500 text-white py-2 rounded-[20px] text-xl font-medium'><NavLink to={'/allUsers'} className={({isActive})=>isActive?'text-black':'text-white'}>All invoices</NavLink></li>
                            <li className='w-full text-center bg-orange-500 text-white py-2 rounded-[20px] text-xl font-medium'><button onClick={logOut} >logout</button></li>
                        </ul>
                        )
                    }
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;