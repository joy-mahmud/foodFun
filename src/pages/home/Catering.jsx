
import { useEffect } from "react";
import pic1 from "../../../public/images/birthday.png"
import pic2 from "../../../public/images/businessmeeting.png"
import pic3 from "../../../public/images/weddingpng.png"
import Aos from "aos";
import 'aos/dist/aos.css'
const Catering = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <div className="text-center bg-[#FAFAFA] mt-20 p-5 md:p-10 lg:p-16">
            <h2 className='text-6xl font-extrabold mb-20'>Catering Services</h2>
            <div  className='grid  grid-cols-1 md:grid-cols-3 gap-10'>
                <div data-aos="fade-up" className="flex flex-col items-center gap-5">
                    <img className="w-[90px] h-[90px]" src={pic1} alt="" />
                    <h2 className="text-2xl font-bold">Birthday Party</h2>
                    <p className="text-[18px] text-[#6F6F6F]">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
                <div data-aos="fade-down" className="flex flex-col items-center gap-5">
                    <img className="w-[90px] h-[90px]" src={pic2} alt="" />
                    <h2 className="text-2xl font-bold">Business Meetings</h2>
                    <p className="text-[18px] text-[#6F6F6F]">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
                <div data-aos="fade-up" className="flex flex-col items-center justify-between gap-5">
                    <img className="w-[90px] h-[90px]" src={pic3} alt="" />
                    <h2 className="text-2xl font-bold">Wedding Party</h2>
                    <p className="text-[18px] text-[#6F6F6F]">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                </div>
            </div>
        </div>
    );
};

export default Catering;