import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";


const MyAddedItems = () => {
    const { user } = useContext(AuthContext)
    const [myAddedItems, setMyAddedItems] = useState([])
    const [pending,setPending] = useState(true)
    const axiosSecure = useAxios()
    
    const url = `/myaddeditems?email=${user?.email}`
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setMyAddedItems(res.data)
                setPending(false)

            })
       
    }, [url,axiosSecure])
    if(pending){
        return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    
    return (
        <div>
            {/* {
          myBookings.map(item=>)
      } */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th></th>
                            <th>Item name</th>
                            <th>Price</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myAddedItems.map((item, idx) => <tr key={idx}>
                                <th>
                                    {/* <button onClick={()=>handleDelete(item._id)} className="btn btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button> */}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask rounded-md w-12 h-12">
                                                <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.item_name}
                                </td>
                                <td>
                                    ${item.price}
                                </td>

                                <th>
                                    <button className="bg-[#0DA3D6] text-white rounded-md btn-xs"><Link to={`/update/${item._id}`}>Update</Link></button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyAddedItems;