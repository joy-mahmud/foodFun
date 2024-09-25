import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";



const Root = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div style={{ minHeight: `${windowHeight}px` }} className="flex flex-col justify-between">
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;