import { Navigate, useLocation } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return 
    }
    if(user){
         return children
    }else{
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

   
};

export default PrivateRoute;