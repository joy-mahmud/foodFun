import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const MyTable = () => {
    const { user, loading } = useContext(AuthContext)
    const { data, isPending } = useQuery({
        queryKey: ['myTble', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://foodfun-server.vercel.app/bookTable?email=${user.email}`)
            return res.data
        }
    })
    if(loading || isPending){
        return (<h1>loading.....</h1>)
    }

    return (
        <div>
            <h2 className="text-center text-4xl font-bold mb-5 mt-3">My Reservations</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Booking date</th>
                            <th>Number of guest</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item,idx)=><tr key={item._id}>
                                <th>{idx+1}</th>
                                <td>{item.name}</td>
                                <td>{item.booking_date}</td>
                                <td>{item.guest}</td>
                            </tr> )
                        }
                      
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTable;