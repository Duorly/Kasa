import {createBrowserRouter} from "react-router-dom";
import {NotFound} from "../pages/Error/NotFound";
import {Home} from "../pages/Home/Index";
import {About} from "../pages/About/Index";
import {Fiche} from "../pages/Fiche/Index";

const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound/>,
    },
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/fiche/:id",
        element: <Fiche/>,
    },
]);

export default router;