import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const Purchase = () => {
    const foodData = useLoaderData()
    const { item_name, description, price,owner_name, category, quantity, owner_email, img, food_origin,_id } = foodData
    console.log(owner_email)
    const {user} = useContext(AuthContext)
    const handlePurchase = (e)=>{

        e.preventDefault()
        
        const form = e.target
        const foodName = form.food_name.value 
        const price = form.price.value 
        const date = form.date.value 
        const order_quantity = form.quantity.value 
        const buyer_name = form.buyer_name.value 
        const email = form.email.value 
        const itemId = _id
        if(owner_email==user?.email){
            return toast("you added this product so you can not buy this product")
        }
        else if(quantity==0){
            return toast("This food is not availale now")
        }
        else if (quantity<order_quantity){
            return toast("we dont have this quntity of this product you want")
        }
        const purchaseData = {foodName,price,date,order_quantity,buyer_name,owner_name,email,img,itemId}
        axios.post('http://localhost:5000/orders',purchaseData)
        .then(res=>{
            console.log(res.data)
            toast("You successfully ordered the food ")
        })



    }
    return (
        <div className="container mx-auto relative">
        <img src={img} alt="" className="h-[300px] w-full" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] h-[300px] w-full top-0">
            <div className="flex flex-col justify-center h-full">
                <h2 className="font-bold text-5xl text-white ml-20">Purchase now</h2><br />
                <h2 className="font-bold text-2xl text-white ml-20">Availbale Qunatity:{quantity}</h2>
            </div>

        </div>
        

        <div className="p-20 bg-base-200 rounded-lg my-20">
        <form onSubmit={handlePurchase} className="card-body">
            <div className="grid grid-cols-2 gap-5">
                <div className="form-control">
                    <label className="ml-1">Item name</label>
                    <input type="text" name='food_name' defaultValue={item_name} placeholder="Item name" className="input input-bordered" readOnly required />
                </div>
                <div className="form-control">
                <label className="ml-1">Price</label>
                    <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" readOnly required />
                </div>
               
                <div className="form-control">
                   <label className="ml-1" htmlFor="">Order data</label>
                    <input type="date" name="date" placeholder="date" className="input input-bordered" required />

                </div>
               
                <div className="form-control">
                    <label className="ml-1">Qunatity</label>
                    <input type="text" name="quantity" placeholder="Quanrity" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="ml-1">Your Name</label>
                    <input type="text" name='buyer_name' defaultValue={user?.displayName} placeholder="Buyer_name" className="input input-bordered" readOnly required />
                </div>
                <div className="form-control">
                    <label className="ml-1" htmlFor="">Your email</label>
                    <input type="email" name="email" defaultValue={user?.email} placeholder="your email" className="input input-bordered" required readOnly/>

                </div>
               
            </div>
            <div className="form-control mt-6">
                <button className="btn bg-[#0DA3D6] border-[#0DA3D6] text-white hover:bg-[#0DA3D6]">Purchase now</button>
            </div>
        </form>
        </div>
        <ToastContainer></ToastContainer>
    </div>
    );
};

export default Purchase;