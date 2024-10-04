import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./ui/components/layout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                lazy: () => import("./views/Home"),
            },
            {
                path: "/explore",
                lazy: () => import("./views/Explore"),
            },
            {
                path: "/lessons",
                lazy: () => import("./views/Lessons"),
            },
            {
                path: "/lesson1",
                lazy: () => import("./views/Lesson1"),
            },
            {
                path: "/lesson2",
                lazy: () => import("./views/Lesson2"),
            },
            {
                path: "/lesson3",
                lazy: () => import("./views/Lesson3"),
            },
            {
                path: "/lesson4",
                lazy: () => import("./views/Lesson4"),
            },
            {
                path: "/lesson5",
                lazy: () => import("./views/Lesson5"),
            },
            {
                path: "/lesson6",
                lazy: () => import("./views/Lesson6"),
            },
            {
                path: "/maps",
                lazy: () => import("./views/Maps"),
            },
            {
                path: "/simulation",
                lazy: () => import("./views/Simulation"),
            },
            {
                path: "/about",
                lazy: () => import("./views/About"),
            },
            {
                path: "/references",
                lazy: () => import("./views/References"),
            },
        ],
    },
]);
