import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import axios from "axios";


const AdminHome = () => {
    const { user, loading } = useContext(AuthContext)
    const { data: allOrders, loading: allOrdersLoading,refetch } = useQuery({
        queryKey: [ 'allOrders',user?.email,],
        enabled: !loading,
        queryFn: async () => {
            const response = await axios.get(`http://localhost:5000/allOrders/${user?.email}`)
            return response.data
        }
    })
    if (loading || allOrdersLoading) {
        return
    }
    const handleStatus = async(status,id)=>{
        const statusInfo={
            status:status
        }
        const response = await axios.patch(`http://localhost:5000/updateStatus/${id}`,statusInfo)
        if(response.data.modifiedCount>0){
            refetch()
        }
      
    }
 
    return (
        <div className="">
            <h2 className="text-center font-semibold text-[30px] my-5">All orders</h2>
            <div className="mt-2">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th></th>
                                <th>FoodName</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Total price</th>
                                <th>Quantity</th>
                                <th>Date</th>
                                <th>Delivery status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {/* row 1 */}
                            {
                                allOrders && allOrders.map((item, index) => <tr key={index}>
                                    <td><img src={item.img} className="h-[70px] w-[70px] rounded-xl"></img></td>
                                    <td>{item.foodName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td>{item.phone}</td>
                                    <td>{parseFloat(item.price) * parseFloat(item.order_quantity)}</td>
                                    <td>{item.order_quantity}</td>
                                    <td>{item.date}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <div className={`dropdown dropdown-end` }>
                                            <div tabIndex={0} role="button" className="btn m-1">Manage</div>
                                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                <li><a onClick={()=>handleStatus('pending',item._id)}>Pending</a></li>
                                                <li><a onClick={()=>handleStatus('delivered',item._id)}>Delivered</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;