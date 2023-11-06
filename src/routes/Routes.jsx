import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            
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