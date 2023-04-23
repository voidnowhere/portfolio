import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home";
import AcademicCareer from "./components/AcademicCareer";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";

const router = createBrowserRouter([
    {path: "/", element: <Home/>,},
    {path: "/formations", element: <AcademicCareer/>,},
    {path: "/experiences", element: <Experiences/>,},
    {path: "/projets", element: <Projects/>,},
    {path: "/certifications", element: <Certifications/>,},
]);

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
