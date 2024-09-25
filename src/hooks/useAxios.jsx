import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const axiosSecure = axios.create({
    //baseURL: 'https://foodfun-server.vercel.app',
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxios = () => {
    const { logOut,loading } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => { console.log(error) })
            }
        })
    }, [loading])
    return axiosSecure
};

export default useAxios;