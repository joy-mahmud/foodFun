import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import axios from "axios";


const TableBookingPage = () => {
    const { user, loading } = useContext(AuthContext)
    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const booking_date = form.booking_date.value
        const guest = form.guest.value
        const bookingData = { name, email, booking_date, guest }
        axios.post('http://localhost:5000/bookTable', bookingData)
            .then(res => {
                console.log(res.data)
                toast('You booked table successfully')
            })

    }
    return (
        <div className="container mx-auto">
            <h2 className="text-center my-5 font-bold text-4xl text-[#0DA3D6]">Book Your Table</h2>
            <div>
                <h2 className="text-3xl text-center">To book a table in our restaurant please fill out the form below</h2>
                <form onSubmit={handleBooking} className="card-body">
                    <div className="grid grid-cols-2 gap-5">

                        <div className="form-control">
                            <label className="ml-1" htmlFor="">Your name</label>
                            <input type="text" name="name" placeholder="Enter your name" defaultValue={user?.displayName} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="ml-1" htmlFor="">Your email</label>
                            <input type="text" name="email" placeholder="enter your email" defaultValue={user?.email} className="input input-bordered" required />

                        </div>


                        <div className="form-control">
                            <label className="ml-1" htmlFor="">Number of guests</label>
                            <input type="number" name="guest" placeholder="Enter the number of guests" defaultValue={user?.displayName} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="ml-1" htmlFor="">Booking Date</label>
                            <input type="date" name="booking_date" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#0DA3D6] border-[#0DA3D6] text-white hover:bg-[#0DA3D6]">submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TableBookingPage;