import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import TestGrid from "./pages/TestGrid";
import TestFlex from "./pages/TestFlex";
import Welcome from "./pages/Welcome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Welcome />,
    },
    {
        path: "/test-grid",
        element: <TestGrid />,
    },
    {
        path: "/test-flex",
        element: <TestFlex />,
    },
]);
