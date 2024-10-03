import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useAdmin = () => {
    const {user,loading}=useContext(AuthContext)
    const {data:isAdmin,loading:adminLoading}=useQuery({
        queryKey:[user?.email,'adminaccount'],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axios.get(`http://localhost:5000/users/admin/${user.email}`)
            console.log(res.data)
            return res.data?.admin
        },
        
    })
   return [isAdmin,adminLoading]
};

export default useAdmin;