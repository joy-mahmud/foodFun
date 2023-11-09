import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";


const MyOrder = () => {
    const { user } = useContext(AuthContext)
    const [loading,setLoading] = useState(true)
    const [myAddedItems, setMyAddedItems] = useState([])
    const axiosSecure =useAxios()
    const url = `/myorders?email=${user?.email}`
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => {
                setMyAddedItems(res.data)
                setLoading(false)

            })
       
    }, [url,axiosSecure])
    if(loading){
        return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
        const handleDelete = (id)=>{
            fetch(`http://localhost:5000/delete/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(()=>{
                const remaining = myAddedItems.filter(item=>item._id!==id)
                setMyAddedItems(remaining) 
                toast("Item deleted from your cart")
        })
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
                       
                        <th></th>
                        <th></th>
                        <th>Item name</th>
                        <th>Price</th>
                        <th>Order date</th>
                        <th>Food owner</th>
                        <th>Order quantity</th>
                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myAddedItems.map((item, idx) => <tr key={idx}>
                          <td></td>
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
                                {item.foodName}
                            </td>
                            <td>
                                ${item.price}
                            </td>
                            <td>{item.date}</td>
                            <td>{item.owner_name}</td>
                            <td>{item.order_quantity}</td>

                            <th>
                                <button onClick={()=>handleDelete(item._id)}  className="bg-[#0DA3D6] text-white rounded-md btn-xs">Delete</button>
                            </th>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
        <ToastContainer></ToastContainer>
    </div>
    );
};

export default MyOrder;