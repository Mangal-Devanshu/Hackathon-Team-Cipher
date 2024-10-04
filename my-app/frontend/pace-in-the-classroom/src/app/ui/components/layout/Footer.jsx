import { FaTwitter, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="font-semibold text-lg">&copy; Team Space Ciphers 2024. All Rights Reserved</p>
                <div className="mt-4 flex justify-center">
                    <a
                        href="https://twitter.com/NASA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-blue-700 mx-4"
                    >
                        <FaTwitter size={24} />
                    </a>
                    <a
                        href="https://www.instagram.com/NASA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-blue-700 mx-4"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://github.com/NASA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-blue-700 mx-4"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://facebook.com/NASA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-blue-700 mx-4"
                    >
                        <FaFacebook size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
