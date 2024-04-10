
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
import Speciality from "../Components/Categoties/Speciality";
import Luxury from "../Components/Categoties/Luxury";
import GovtAndPublic from "../Components/Categoties/GovtAndPublic";
import Hospitality from "../Components/Categoties/Hospitality";
import About from "../Components/About/About";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/residential",
                element: <Residential></Residential>,
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
            {
                path: "/speciality",
                element: <Speciality></Speciality>,
            },
            {
                path: "/luxury",
                element: <Luxury></Luxury>,
            },
            {
                path: "/govt-and-public",
                element: <GovtAndPublic></GovtAndPublic>,
            },
            {
                path: "/hospitality",
                element: <Hospitality></Hospitality>,
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: ()=> fetch('estates.json')
            },
            {
                path: "/update-profile",
                element: <UpdateProfile></UpdateProfile>,
            },
            {
                path: "/user-profile",
                element: <UserProfile></UserProfile>,
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