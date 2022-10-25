import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Courses from "../components/Courses";
import Error from "../components/Error";
import Faq from "../components/Faq";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/Login',
                element: <Login></Login>,
            },
            {
                path: '/Register',
                element: <Register></Register>,
            },
            {
                path: '/Course',
                element: <Courses></Courses>,
            },
            {
                path: '/Blog',
                element: <Blog></Blog>,
            },
            {
                path: '/Faq',
                element: <Faq></Faq>,
            },
        ]
    },


])