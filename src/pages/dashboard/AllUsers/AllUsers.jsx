import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const AllUsers = () => {
    const { user, loading } = useContext(AuthContext)
    const { data: allUsers, loading: allUsersLoading,refetch } = useQuery({
        queryKey: ['allUsers',user?.email, ],
        enabled: !loading,
        queryFn: async () => {
            const response = await axios.get(`http://localhost:5000/allUsers/${user?.email}`)
            return response.data
        }
    })
    if (loading || allUsersLoading) {
        return
    }
    const handleRole = async(role,email)=>{
        const statusInfo={
            role:role,
            email:email
            
        }
        const response = await axios.patch(`http://localhost:5000/updateRole/${user?.email}`,statusInfo)
        if(response.data.modifiedCount>0){
            refetch()
        }
      
    }
    return (
        <div className="">
            <h2 className="text-center font-semibold text-[30px] my-5">All orders</h2>
            <div className="mt-2">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {/* row 1 */}
                            {
                                allUsers && allUsers.map((item, index) => <tr key={index}>
                                    <th></th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                   
                                    <td>
                                        <div className={`dropdown dropdown-end` }>
                                            <div tabIndex={0} role="button" className="btn m-1">Manage</div>
                                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                <li><a onClick={()=>handleRole('user',item.email)}>Make user</a></li>
                                                <li><a onClick={()=>handleRole('admin',item.email)}>Make admin</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;