
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import { FaMinus, FaPlus } from "react-icons/fa";
import useCart from "../../hooks/UseCart";




const MyOrder = () => {
    const { user, loading } = useContext(AuthContext)
    const[,refetch]=useCart()
    const [myAddedItem, setMyAddedItems] = useState([])
    const [quantity, setQuntity] = useState(null)
    const axiosSecure = useAxios()
    const url = `/myorders?email=${user?.email}`

console.log('my added item',myAddedItem)
    useEffect(() => {
        if (!loading) {
            axiosSecure.get(url)
                .then(res => {
                    console.log(res.data)
                    setMyAddedItems(res.data)
                    const qnty = res.data.map(item => parseInt(item.order_quantity))
                    setQuntity(qnty)

                })
        }


    }, [url,axiosSecure,loading])
    if (loading) {
        return 
    }
   // console.log(quantity)
    const handleDelete = (id) => {
        axiosSecure.delete(`/deleteFromCart/${id}?email=${user?.email}`)
            .then((res) => {
                console.log(res.data)
                if (res.data.deletedCount == 1) {
                    const remaining = myAddedItem.filter(item => item._id !== id)
                    setMyAddedItems(remaining)
                    toast("Item deleted from your cart")
                    refetch()
                }

            })
        //     fetch(`http://localhost:5000/delete/?${id}?email=${user?.email}`,{
        //         method:'DELETE'
        //     })
        //     .then(res=>res.json())
        //     .then((data)=>{
        //         console.log(data)
        //         const remaining = myAddedItems.filter(item=>item._id!==id)
        //         setMyAddedItems(remaining) 
        //         toast("Item deleted from your cart")
        // })
    }
    const handleIncrease = (idx) => {
        const id =parseInt(idx)
        const value = quantity[id]
         const newValue = value+1
         const newqnty =[...quantity]
         newqnty[idx]=newValue
         setQuntity(newqnty)
    }
    const handleDecrease = (idx) => {
        const id =parseInt(idx)
        const value = quantity[id]
        const newValue = value-1
        if(newValue==0){
            return
        }
        const newqnty =[...quantity]
        newqnty[idx]=newValue
        setQuntity(newqnty)
    }
    return (
        <div>
            {/* {
      myBookings.map(item=>)
  } */}
            <div className="overflow-x-auto ">
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
                            myAddedItem.map((item, idx) => <tr key={idx}>
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
                                    ${parseFloat(item.price)*quantity[idx]}
                                   
                                </td>
                                <td>{item.date}</td>
                                <td>{item.owner_name}</td>
                                <td><button onClick={()=>handleDecrease(idx)} className=" px-2 py-1 font-bold border-2 rounded-lg mr-1"><FaMinus></FaMinus></button>{quantity[idx]}<button onClick={() => handleIncrease(idx)} className="ml-1  px-2 py-1 font-bold border-2 rounded-lg"><FaPlus></FaPlus></button> </td>

                                <th>
                                    <button onClick={()=>handleDelete(item._id)} className="bg-[#0DA3D6] text-white rounded-md btn-xs">Delete</button>
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