
import BookTable from "./BookTable";
import Carousel from "./Carousel";
import Catering from "./Catering.Jsx";
import Shefs from "./Shefs";


import TopFood from "./TopFood";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Carousel></Carousel>
            <TopFood></TopFood>
            <BookTable></BookTable>
            <Catering></Catering>
            <Shefs></Shefs>
            
            
        </div>
    );
};

export default Home;