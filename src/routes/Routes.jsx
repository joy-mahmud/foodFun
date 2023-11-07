import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import AllFood from "../pages/AllFood/AllFood";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FoodDetails from "../pages/foodDetails/FoodDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            
        },
        {
            path:'/allfoods',
            element:<AllFood></AllFood>
        },
        {
            path:'/foodDetails/:id',
            element:<FoodDetails></FoodDetails>,
            loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Register></Register>
        },
      
      ]
    },
  ]);

export default router;