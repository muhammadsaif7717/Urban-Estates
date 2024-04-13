
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Components/Home/Home";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import UserProfile from "../Components/UserProfile/UserProfile";
import Details from "../Components/Details/Details";
import Residential from "../Components/Categoties/Residential";
import Commercial from "../Components/Categoties/Commercial";
import Land from "../Components/Categoties/Land";
import Industrial from "../Components/Categoties/Industrial";
import About from "../Components/About/About";
import PrivetRoute from "./PrivetRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                children: [
                    {
                        path: "/",
                        element: <Residential></Residential>,
                        loader: ()=>fetch('/residential.json'),
                    },
                    {
                        path: "/commercial",
                        element: <Commercial></Commercial>,
                    },
                    {
                        path: "/land",
                        element: <Land></Land>,
                    },
                    {
                        path: "/industrial",
                        element: <Industrial></Industrial>,
                    },
                ]
            },
            {
                path: "/About",
                element: <PrivetRoute><About></About></PrivetRoute>,
            },
            {
                path: "/details/:id",
                element: <PrivetRoute><Details></Details></PrivetRoute>,
                loader: ()=>fetch('/residential.json'),
            },
            {
                path: "/update-profile",
                element: <PrivetRoute><UpdateProfile></UpdateProfile></PrivetRoute>,
            },
            {
                path: "/user-profile",
                element: <PrivetRoute><UserProfile></UserProfile></PrivetRoute>,
            },
            {
                path: "/sign-in",
                element: <SignIn></SignIn>,
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>,
            },
        ]
    },
]);

export default router;