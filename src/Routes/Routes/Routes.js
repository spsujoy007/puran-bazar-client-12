import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ProductByCategory from "../../Pages/ProductByCategory/ProductByCategory";
import Signup from "../../Pages/SignIn/Signup";

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
    }
])