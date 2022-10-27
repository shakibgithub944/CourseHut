import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import CheckOut from "../components/CheckOut";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import Error from "../components/Error";
import Faq from "../components/Faq";
import Home from "../components/Home";
import Login from "../components/Login";
import PrivetRoute from "../components/PrivetRoute";
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
                loader: async () => {
                    return fetch('http://localhost:5000/Course');
                },

            },
            {
                path: '/Course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/Course/${params.id}`);
                },

            },
            {
                path: '/Course/:id/CheckOut',
                element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/Course/${params.id}`);
                },

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