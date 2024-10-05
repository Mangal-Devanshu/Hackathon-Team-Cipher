import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

export function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar Component */}
            <header className="sticky top-0 z-50 flex justify-center bg-black">
                <Navbar />
            </header>

            {/* Main Content */}
            <main className="flex-grow p-6 bg-black">
                <Outlet />
            </main>

            {/* Footer Component */}
            <footer className="bg-neutral-900 text-white z-10">
                <Footer />
            </footer>
        </div>
    );
}

export default Layout;