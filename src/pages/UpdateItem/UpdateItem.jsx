import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";


const UpdateItem = () => {
    const id = useParams()
    const{user}=useContext(AuthContext)
    // const [foodData, setFoodData] = useState([])
    // const [loading, setLoading] = useState(true)
   
    const { isPending, data } = useQuery({
            queryKey: ['repoData'],
            queryFn: () => {
                return axios.get(`http://localhost:5000/details/${id.id}`).then(res => res.data)
            }
    
        })
        if (isPending) {
         return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
        }
        const { item_name, img, food_origin, price, quantity, category, description } = data

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/details/${id.id}`)
    //         .then(res => {
    //             setFoodData(res.data)
    //             setLoading(false)
    //         })
    // }, [id])
   
    const handleUpdate = (e) => {
        e.preventDefault()

        const form = e.target
        const foodName = form.food_name.value
        const price = form.price.value
        const category = form.category.value
        const desc = form.desc.value
        const quantity = form.quantity.value
        const origin = form.origin.value
        const photo_url = form.photo_url.value
        const updateItems = { foodName, price, category, desc, quantity:quantity, origin, photo_url }

        axios.post(`http://localhost:5000/update/${id.id}`, updateItems)
            .then(res => {
                toast("Item is updated successfully")
                console.log(res.data)})

    }
    return (
        <div>
            <div className="p-20 bg-base-200 rounded-lg my-20">
                <form onSubmit={handleUpdate} className="card-body">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="ml-1">Item name</label>
                            <input type="text" name='food_name' defaultValue={item_name} placeholder="Item name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="ml-1">Price</label>
                            <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="ml-1" htmlFor="">Category</label>
                            <input type="text" name="category" defaultValue={category} placeholder="category" className="input input-bordered" required />

                        </div>

                        <div className="form-control">
                            <label className="ml-1">Qunatity</label>
                            <input type="text" name="quantity" placeholder="Quanrity" defaultValue={quantity} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="ml-1">Photo Url</label>
                            <input type="text" name='photo_url' defaultValue={img} placeholder="" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="ml-1" htmlFor="">Food Origin</label>
                            <input type="text" name="origin" defaultValue={food_origin} placeholder="" className="input input-bordered" required />

                        </div>
                        <div className="col-span-2">
                           <label htmlFor="">Short description</label>
                            <textarea  name="desc" className=" w-full textarea textarea-bordered" defaultValue={description} placeholder="Short description"></textarea>
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#0DA3D6] border-[#0DA3D6] text-white hover:bg-[#0DA3D6]">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
