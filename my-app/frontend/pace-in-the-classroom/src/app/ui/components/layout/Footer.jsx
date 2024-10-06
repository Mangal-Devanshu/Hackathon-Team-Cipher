import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa"; // Import Threads icon
import { BsFillThreadsFill } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="font-semibold text-lg">&copy; Team Space Ciphers 2024. All Rights Reserved</p>
                <div className="mt-4 flex justify-center">
                    <a
                        href="https://x.com/spaceciphers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-blue-700 mx-4"
                    >
                        <FaTwitter size={24} />
                    </a>
                    <a
                        href="https://www.instagram.com/teamspaceciphers/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-blue-700 mx-4"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://github.com/teamspaceciphers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-blue-700 mx-4"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.threads.net/@teamspaceciphers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-blue-700 mx-4"
                    >
                        <BsFillThreadsFill size={24} /> {/* Use Threads icon here */}
                    </a>
                </div>
            </div>
        </footer>
    );
}
