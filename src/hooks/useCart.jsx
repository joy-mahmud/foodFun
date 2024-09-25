import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";


const useCart = () => {
    const{user,loading}=useContext(AuthContext)

    const { data=[], refetch } = useQuery({
        queryKey: ['cartnumber', user?.email],
        enabled:!loading,
        queryFn: async () => {
           // const res = await axios.get(`http://localhost:5000/myCart/${user?.email}`)
            const res = await axios.get(`http://localhost:5000/myCart/${user?.email}`)
            return res.data
        }
    })
    return [data,refetch]
};

export default useCart;