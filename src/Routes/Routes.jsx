import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Blog from "../pages/Blog/Blog";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "./ErrorPage";
import BusinessDetails from "../pages/Business/BusinessPage/BusinessDetails/BusinessDetails";
import Business from "../pages/Business/BusinessPage/Business/Business";
import Profile from "../pages/Profile/Profile";
import About from "../pages/Home/About/About";
import Contact from "../pages/Home/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "blog",
                element: <PrivateRoutes><Blog></Blog></PrivateRoutes>
            },
            {
                path: "business",
                element: <Business></Business>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "profile",
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
            },
            {
                path: "/businesses/:id",
                element: <PrivateRoutes><BusinessDetails></BusinessDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://bangladeshi-handicrafts-server.vercel.app/businesses/${params.id}`)
            },
        ]
    },
]);

