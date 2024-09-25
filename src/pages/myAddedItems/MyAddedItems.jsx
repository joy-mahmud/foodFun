
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Swal from 'sweetalert2'
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const MyAddedItems = () => {
    const { user, loading } = useContext(AuthContext)
    // const [myAddedItems, setMyAddedItems] = useState([])
    // const [pending, setPending] = useState(true)
    //const axiosSecure = useAxios()

    // const url = `/myaddeditems?email=${user?.email}`
    // console.log('myadded item', myAddedItems)
    const { data: myAddedItems, refetch, loading: pending } = useQuery({
        queryKey: ['myaddedItem', user?.email],
        enabled: !loading,
        queryFn: async () => {
            // const res = await axios.get(`http://localhost:5000/myCart/${user?.email}`)
            const res = await axios.get(`http://localhost:5000/myaddeditems?email=${user?.email}`)
            return res.data
        }
    })
    // useEffect(() => {
    //     if (!loading) {
    //         axiosSecure.get(url)
    //             .then(res => {
    //                 setMyAddedItems(res.data)
    //                 console.log(res.data);
    //                 setPending(false)

    //             })
    //     }

    // }, [url, axiosSecure, loading])
    if (pending) {
        return <h1 className="text-center">loading...</h1>
    }
    const handleDelete = (id) => {
        // const res = axios.delete(`/deleteAddedItem/${id}?email=${user?.email}`)
        // console.log(res)
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this item",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {

            if (result.isConfirmed) {
                const res = await axios.delete(`http://localhost:5000/deleteAddedItem/${id}?email=${user?.email}`)
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your item has been deleted.",
                        icon: "success"
                    });
                    refetch();
                }

            }
        });
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
                            myAddedItems && myAddedItems.map((item, idx) => <tr key={idx}>
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

                                <th className="flex gap-2">
                                    <button className="bg-[#0DA3D6] text-white rounded-md btn-xs"><Link to={`/update/${item._id}`}>Update</Link></button>
                                    <button onClick={() => handleDelete(item._id)} className="bg-[#e03d66] text-white rounded-md btn-xs">Delete</button>
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