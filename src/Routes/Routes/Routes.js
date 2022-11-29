import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportedProducts from "../../Pages/Dashboard/ReportedProducts/ReportedProducts";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import ProductByCategory from "../../Pages/Home/ProductByCategory/ProductByCategory";
import SingleProductCard from "../../Pages/Home/SingleProductCard/SingleProductCard";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/SignIn/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            //useLoader in this home path: important!*************************
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/usedphones/:category',
                loader: ({params}) => fetch(`http://localhost:5000/usedphones/${params.category}`),
                element: <ProductByCategory></ProductByCategory>
            },
            {
                path: '/phone/:id',
                loader: ({params}) => fetch(`http://localhost:5000/phone/${params.id}`),
                element: <PrivetRoute><SingleProductCard></SingleProductCard></PrivetRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <PrivetRoute><MyOrders></MyOrders></PrivetRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/reportedproduct',
                element: <AdminRoute><ReportedProducts></ReportedProducts></AdminRoute>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
])