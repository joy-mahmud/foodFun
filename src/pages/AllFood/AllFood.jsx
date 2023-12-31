import './allfood.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllFood = () => {
    const [cardData, setCardData] = useState([])
    const [pending, setPending] = useState(true)

    const [currentPage,setCurrentPage]=useState(0)
    const {count}=useLoaderData()
    console.log(count)
    const itmesPerPage = 9;
    
    
    // const { isPending, error, data } = useQuery({
    //     queryKey: ['repoData'],
    //     queryFn: () => {
    //         return axios.get('http://localhost:5000/allfoods').then(res => res.data)
    //     }

    // })

    useEffect(() => {
        axios.get(`http://localhost:5000/allfoods?page=${currentPage}&size=${itmesPerPage}`).then(res => {
            setCardData(res.data)
            setPending(false)
        })
    }, [currentPage])

    if (pending) {
        return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    const numberOfPages = Math.ceil(count / itmesPerPage)
    console.log(numberOfPages)
    const pages = [...Array(numberOfPages).keys()]

    const handdleSearch = e => {
        e.preventDefault()
        const searchValue = e.target.search.value
        console.log(searchValue)
        const filteredData = cardData.filter(item => {
            const itemName = item.item_name.toLowerCase()
            const itemCatagory = item.category.toLowerCase()
            if (itemName === searchValue) {
                return item
            }
            else if (itemCatagory === searchValue) {
                return item
            }
        })
        setCardData(filteredData)

    }
    const handleNext =()=>{
        if(currentPage<pages.length-1){
            setCurrentPage(currentPage+1)
        }
        
    }
    const handlePrev =()=>{
        if(currentPage>0){
            setCurrentPage(currentPage-1)
        }
    }

    return (
        <div className="container mx-auto">
            <h2 className="text-5xl font-bold mt-10 mb-5 text-[#0DA3D6] text-center">Our foods</h2>
            <div className="h-12 text-center mb-5"><form onSubmit={handdleSearch}><input type="text" name="search" className=" bg-white p-2 border boeder-2 rounded-l-lg w-1/2 outline-none" placeholder="search your food here" /><button className="rounded-r-lg bg-slate-400 px-4 py-[9px]">Search</button></form></div>
            <div className="grid grid-cols-3 gap-5">
                {
                    cardData?.map(item => <div key={item._id} className="bg-[#B9D1DA] rounded-lg">
                        <img className="h-[300px] rounded-t-lg w-full" src={item.img} alt="" />
                        <div className="p-5">
                            <div className="text-start text-[#1d4a58] space-y-1">
                                <h2 className="text-2xl font-semibold"> {item.item_name}</h2>
                                <p className="text-xl font-medium">{item.category}</p>
                                <div className="flex justify-between"><p className="font-medium">price:${item.price}</p><p className="font-medium">Available:{item.quantity}</p></div>
                            </div>
                            <button className="btn btn-outline w-full mt-3 text-[#0DA3D6] hover:bg-[#0DA3D6] hover:text-white hover:border-[#0DA3D6]"><Link to={`/foodDetails/${item._id}`}>Details</Link></button>
                        </div>
                    </div>)
                }

            </div>

            <div className="text-center mt-10">
                <button onClick={handlePrev} className='btn mr-2'>prev</button>
            {
                pages.map(page => <button
                onClick={()=>setCurrentPage(page)}
                className={currentPage==page?'activepage':''}
                    key={page}
                >
                   <p className="text-xl p-2 bg-slate-400 ml-2 rounded-md">{page+1}</p>
                </button>)
            }
             <button onClick={handleNext} className='btn ml-2'>next</button>
            </div>
           


        </div>
    );
};

export default AllFood;