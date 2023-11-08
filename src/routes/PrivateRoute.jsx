import { Navigate, useLocation } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const PrivateRoute = ({children}) => {
    const {user,loadingData} = useContext(AuthContext)
    const location = useLocation()
    if(loadingData){
        return <span className="loading loading-spinner loading-lg text-center"></span>
    }
    if(user){
         return children
    }else{
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

   
};

export default PrivateRoute;