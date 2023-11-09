
import pic1 from "../../../public/images/resowner.png"
import pic2 from "../../../public/images/masterShef.png"
import pic3 from "../../../public/images/Shef1.png"
import pic4 from "../../../public/images/Shef2.png"
import icons from "../../../public/images/icons.png"
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react"


const Shefs = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <div className="mt-20">
            <h2 className='text-6xl font-extrabold mb-20 text-center'>Our master Shefs</h2>
            <div data-aos="fade-up" className="grid  grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4">
                <div>
                    <img className="mb-2 rounded-md w-full" src={pic1} alt="" />
                    <h2 className="text-2xl font-bold mb-1 ml-2">John Smooth</h2>
                    <p className="text-[#6F6F6F] mb-1 ml-2">Restaurant Owner</p>
                    <img className="ml-2" src={icons} alt="" />
                </div>
                <div>
                    <img className="mb-2 rounded-md w-full" src={pic2} alt="" />
                    <h2 className="text-2xl font-bold mb-1 ml-2">Rebeca Welson</h2>
                    <p className="text-[#6F6F6F] mb-1 ml-2">Head Chef  </p>
                  
                    <img className=" ml-2" src={icons} alt="" />
                </div>
                <div>
                    <img className="mb-2 rounded-md w-full" src={pic3} alt="" />
                    <h2 className="text-2xl font-bold mb-1 ml-2">Kharl Branyt</h2>
                    <p className="text-[#6F6F6F] mb-1 ml-2">Chef</p>
                    <img className="ml-2" src={icons} alt="" />
                </div>
                <div>
                    <img className="mb-2 rounded-md w-full" src={pic4} alt="" />
                    <h2 className="text-2xl font-bold mb-1 ml-2">Luke Simon</h2>
                    <p className="text-[#6F6F6F] mb-1 ml-2">Chef</p>
                    <img className="ml-2"  src={icons} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Shefs;