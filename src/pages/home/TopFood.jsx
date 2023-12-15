import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TopFood = () => {
    const [data,setData] = useState([])
    const [topfood,setTopFood] = useState([])
    const [isPending,setInspending] = useState(true)
    // const { isPending, error, data } = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () => {
    //         return axios.get('https://foodfun-server.vercel.app/allfoods').then(res => res.data)
    //     }

    // })

    

    useEffect(()=>{
        axios.get('https://foodfun-server.vercel.app/allfoods').then(res => {
            setData(res.data)
            setInspending(false)
        
        })

    },[])

    useEffect(()=>{
        for (var i = 0; i < data.length; i++) { 
  
            // Last i elements are already in place   
            for (var j = 0; j < (data.length - i - 1); j++) { 
      
                if (data[j].order_count < data[j + 1].order_count) { 
      
                    var temp = data[j] 
                    data[j] = data[j + 1] 
                    data[j + 1] = temp 
                  
                } 
            } 
        } 
        setTopFood(data.slice(0,6))
    },[data])
    // if(topfood){
    //     return console.log('top food')
    // }

    
    if (isPending) {
        return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    // data && console.log(data)
    //   const {item_name,category,img,price} = data
    return (
        <div >
            <h2 className="text-5xl font-bold mt-10 mb-5 text-[#0DA3D6] text-center">Our top foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    topfood?.map(item => <div key={item._id} className="bg-[#B9D1DA] rounded-lg">
                        <img className="h-[300px] rounded-t-lg w-full" src={item.img} alt="" />
                        <div className="p-5">
                            <div className="text-start text-[#33839D] space-y-1">
                                <h2 className="text-2xl font-semibold"> {item.item_name}</h2>
                                <p className="text-xl font-medium">{item.category}</p>
                                <p className="font-medium">price:${item.price}</p>
                            </div>
                            <button className="btn btn-outline w-full mt-3 text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]"><Link to={`/foodDetails/${item._id}`}>Details</Link></button>
                        </div>
                    </div>)
                }
               
            </div>
            <div className="text-center mt-5"><button className="btn w-1/2 bg-[#0DA3D6] text-white hover:bg-[#0DA3D6]"><Link to={'/allfoods'}>See All</Link></button></div>
           

        </div>
    );
};

export default TopFood;
