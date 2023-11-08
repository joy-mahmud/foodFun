import { Link, useLoaderData } from "react-router-dom";


const FoodDetails = () => {
    const foodData = useLoaderData()
    const { item_name, description, price, category, quantity, owner_name, img, food_origin,_id } = foodData
    return (
        <div className="container mx-auto ">
            <div className="bg-[#B9D1DA]">
                <img src={img} alt="" className="h-[550px] w-full" />
                <div className="space-y-2 p-5 text-[#1d4a58]">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-5xl font-bold">{item_name}</h3>
                            <p className="text-3xl font-semibold">{category}</p>
                            <p className="text-xl font-medium">Added by: {owner_name}</p>
                            <p className="text-xl font-medium">Origin: {food_origin}</p>
                            <p className="text-xl font-medium">Available quantity: {quantity}</p>
                            <p className="text-3xl font-medium">Price: <span className="text-[#FE5001]">${price}</span></p>
                        </div>
                        <p className="mt-2 text-xl font-medium">{description}</p>
                    </div>
                    <div className="text-center mb-5"><button className="btn btn-outline w-1/2 mt-3 text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]"><Link to={`/purchase/${_id}`}>Order Now</Link></button></div>
                </div>

            </div>


        </div>
    );
};

export default FoodDetails;