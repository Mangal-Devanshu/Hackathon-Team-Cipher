import React from 'react';

export function Component() {
    return (
        <div className="bg-black min-h-screen text-white py-10 px-6 shadow-md shadow-blue-700 rounded-md">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl capitalize font-bold text-blue-700 mb-8 text-center">References</h1>
                <p className="text-lg mb-6 text-white text-justify">
                    Below is a list of all the sources and references used in this project.
                    Each citation follows a standard format for easy verification and exploration.
                </p>
                <ol className="list-inside space-y-4 text-justify">
                    <li>
                        <span className="text-blue-700 font-semibold">[ 1 ] Author Name,</span>
                        <span> "Title of the Source," </span>
                        <span className="italic">Publication Title,</span>
                        <span> Year, </span>
                        <a
                            href="https://pace.oceansciences.org/gallery_more.htm?id=2167"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-700"
                        >
                            [Online Link]
                        </a>
                    </li>
                    <li>
                        <span className="text-blue-700 font-semibold">[ 2 ] Another Author,</span>
                        <span> "Research on Space," </span>
                        <span className="italic">Journal of Astronomy,</span>
                        <span> 2020, </span>
                        <a
                            href="https://example2.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-700"
                        >
                            [Online Link]
                        </a>
                    </li>
                    <li>
                        <span className="text-blue-700 font-semibold">[ 3 ] Third Author,</span>
                        <span> "Exploring the Universe," </span>
                        <span className="italic">Astrophysics Today,</span>
                        <span> 2022, </span>
                        <a
                            href="https://example3.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-700"
                        >
                            [Online Link]
                        </a>
                    </li>
                    <li>
                        <span className="text-blue-700 font-semibold">[ 4 ] Author Name,</span>
                        <span> "Title of the Source," </span>
                        <span className="italic">Publication Title,</span>
                        <span> Year, </span>
                        <a
                            href="https://example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-700"
                        >
                            [Online Link]
                        </a>
                    </li>
                    <li>
                        <span className="text-blue-700 font-semibold">[ 5 ] Another Author,</span>
                        <span> "Research on Space," </span>
                        <span className="italic">Journal of Astronomy,</span>
                        <span> 2020, </span>
                        <a
                            href="https://example2.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-700"
                        >
                            [Online Link]
                        </a>
                    </li>
                    <li>
                        <span className="text-blue-700 font-semibold">[ 6 ] Third Author,</span>
                        <span> "Exploring the Universe," </span>
                        <span className="italic">Astrophysics Today,</span>
                        <span> 2022, </span>
                        <a
                            href="https://example3.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-700"
                        >
                            [Online Link]
                        </a>
                    </li>
                    <li>
                        <span className="text-blue-700 font-semibold">[ 7 ] Third Author,</span>
                        <span> "Exploring the Universe," </span>
                        <span className="italic">Astrophysics Today,</span>
                        <span> 2022, </span>
                        <a
                            href="https://example3.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-700"
                        >
                            [Online Link]
                        </a>
                    </li>
                    <li>
                        <span className="text-blue-700 font-semibold">[ 8 ] Third Author,</span>
                        <span> "Exploring the Universe," </span>
                        <span className="italic">Astrophysics Today,</span>
                        <span> 2022, </span>
                        <a
                            href="https://example3.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-700"
                        >
                            [Online Link]
                        </a>
                    </li>
                </ol>
            </div>
        </div>
    );
}

Component.displayName = "ReferencesPage";