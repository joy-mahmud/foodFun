import { Link } from 'react-router-dom';
import errorImg from '../../../public/images/404.jpg'
const ErrorPage = () => {
    return (
        <div className=' flex flex-col items-center'>
            <img src={errorImg} className='h-[400px]' alt="" />
            <button className='btn bg-[#0DA3D6] text-white hover:bg-[#0DA3D6]'><Link to={'/'}>Back to Home</Link></button>
        </div>
    );
};

export default ErrorPage;