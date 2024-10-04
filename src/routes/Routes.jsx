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
import TableBookingPage from "../pages/BookTable/TableBookingPage";
import MyTable from "../pages/MyTables/MyTable";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminRoute from "./AdminRoute";
import AdminHome from "../pages/dashboard/AdminHome/AdminHome";
import AllUsers from "../pages/dashboard/AllUsers/AllUsers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                // this is link of vercel ->foodfun-server.vercel.app
                path: '/allfoods',
                element: <AllFood></AllFood>,
                loader: () => fetch('http://localhost:5000/foodcount')
            },
            {
                path: '/foodDetails/:id',
                element: <FoodDetails></FoodDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: '/purchase/:id',
                element: <PrivateRoute><Purchase></Purchase></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
            },
          
            {
                path: '/myorderitems',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/bookTable',
                element: <PrivateRoute><TableBookingPage></TableBookingPage></PrivateRoute>
            },
            {
                path: '/mytable',
                element: <MyTable></MyTable>
            },
            {
                path: '/update/:id',
                element: <UpdateItem></UpdateItem>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },

        ]
    },
    //dashboard
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'adminHome',
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path:'allUsers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'additem',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'myitems',
                element:<AdminRoute> <MyAddedItems></MyAddedItems></AdminRoute>
            },
        ]
    },
   
]);

export default router;