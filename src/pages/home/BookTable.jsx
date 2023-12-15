import { Link } from 'react-router-dom';
import table from '../../assets/luxury-dinner-table-hotel.jpg'
import table2 from '../../assets/table-set-dinning-table.jpg'

const BookTable = () => {
    return (
        <div>
         <h2 className="text-5xl font-bold mt-10 mb-5 text-[#0DA3D6] text-center">Book a Table</h2>
            <div className='flex gap-3'>
                <img className="lg:w-1/2" src={table} alt="table" />
                <div className='flex flex-col justify-center' >
                    <img src={table2} alt="" />
                    <p className='text-xl mb-5'>At FoodFun, we strive to make your dining experience delightful and hassle-free. Reserve your table now to ensure a wonderful time at our restaurant.</p>
                   <Link to={'/bookTable'}> <button className='px-3 py-3 w-full bg-[#416875] text-white rounded-lg'>Book Your Table</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BookTable;