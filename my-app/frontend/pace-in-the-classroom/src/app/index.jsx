import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Loader } from "./ui/components/loader";

export default function App() {
    return (
        <>
            <RouterProvider router={routes} fallbackElement={<Loader />} />
        </>
    );
}