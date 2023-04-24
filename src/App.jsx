import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home.jsx";
import AcademicCareer from "./components/AcademicCareer.jsx";
import Experiences from "./components/Experiences.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import {Analytics} from '@vercel/analytics/react';

const router = createBrowserRouter([
    {path: "/", element: <Home/>,},
    {path: "/formations", element: <AcademicCareer/>,},
    {path: "/experiences", element: <Experiences/>,},
    {path: "/projets", element: <Projects/>,},
    {path: "/certifications", element: <Certifications/>,},
]);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
            <Analytics/>
        </>
    );
}

export default App;
