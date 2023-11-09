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
import PrivateRoute from "./PrivateRoute";
import Purchase from "../pages/Purchase/Purchase";
import MyAddedItems from "../pages/myAddedItems/MyAddedItems";
import AddItem from "../pages/AddItem/AddItem";
import MyOrder from "../pages/myOrder/MyOrder";
import UpdateItem from "../pages/UpdateItem/UpdateItem";
import Blog from "../pages/blog/Blog";


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
            element:<AllFood></AllFood>,
            loader:()=>fetch('https://foodfun-server.vercel.app/foodcount')
        },
        {
            path:'/foodDetails/:id',
            element:<FoodDetails></FoodDetails>,
            loader:({params})=>fetch(`https://foodfun-server.vercel.app/details/${params.id}`)
        },
        {
            path:'/purchase/:id',
            element:<PrivateRoute><Purchase></Purchase></PrivateRoute>,
            loader:({params})=>fetch(`https://foodfun-server.vercel.app/details/${params.id}`)
        },
        {
            path:'/myitems',
            element:<MyAddedItems></MyAddedItems>
        },
        {
            path:'/additem',
            element:<AddItem></AddItem>
        },
        {
            path:'/myorderitems',
            element:<MyOrder></MyOrder>
        },
        {
            path:'/update/:id',
            element:<UpdateItem></UpdateItem>
        },
        {
            path:'blog',
            element:<Blog></Blog>
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