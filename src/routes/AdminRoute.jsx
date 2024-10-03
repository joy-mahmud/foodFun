import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin,adminLoading]=useAdmin()
    const location = useLocation()
    if(loading || adminLoading){
        return <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    console.log(isAdmin)
    if(user && isAdmin){
        console.log('admin account')
        return children
    } else{
        console.log('user account')
    }
  // return <Navigate to={'/'} state={{from:location}}></Navigate>
};

export default AdminRoute;