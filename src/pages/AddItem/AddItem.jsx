import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";


const AddItem = () => {
    const {user,loading} = useContext(AuthContext) 
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    const handleAdditem = (e)=>{
        e.preventDefault()

        const form = e.target
        const item_name = form.food_name.value
        const price = parseInt(form.price.value)
        const category = form.category.value
        const description = form.desc.value
        const quantity = parseInt(form.quantity.value)
        const food_origin = form.origin.value
        const img = form.photo_url.value
        const order_count=0
        const owner_name = form.owner.value 
        const owner_email = form.owner_email.value
      
        const Item = { item_name, img, food_origin, price, quantity, category, description,order_count,owner_name,owner_email }
        axios.post('http://localhost:5000/additem',Item)
        .then(res=>{
            console.log(res.data)
            toast('You added the item successfully')
        })
    }
    return (
        <div>
            <h3 className="text-center font-bold text-4xl mt-5">Add a food Item</h3>
            <div className="py-5 px-20 bg-base-200 rounded-lg mt-5">
                <form onSubmit={handleAdditem} className="card-body">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="ml-1">Item name</label>
                            <input type="text" name='food_name' placeholder="Item name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="ml-1">Price</label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="ml-1" htmlFor="">Category</label>
                            <input type="text" name="category" placeholder="category" className="input input-bordered" required />

                        </div>

                        <div className="form-control">
                            <label className="ml-1">Qunatity</label>
                            <input type="text" name="quantity" placeholder="Quanrity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="ml-1">Photo Url</label>
                            <input type="text" name='photo_url'  placeholder="Photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="ml-1" htmlFor="">Food Origin</label>
                            <input type="text" name="origin" placeholder="Food origin" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="ml-1" htmlFor="">Your name</label>
                            <input type="text" name="owner" placeholder="Enter your name" defaultValue={user?.displayName} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="ml-1" htmlFor="">Your email</label>
                            <input type="text" name="owner_email" placeholder="enter your email" defaultValue={user?.email} className="input input-bordered" required />

                        </div>
                        <div className="col-span-2">
                           <label htmlFor="">Short description</label>
                            <textarea  name="desc" className=" w-full textarea textarea-bordered" placeholder="Short description"></textarea>
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-orange-500 border-orange-500 text-white hover:bg-[#0DA3D6]">Add This Item</button>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddItem;
