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
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center space-x-2">
                                <p className="text-blue-700 font-bold">[ 1 ]</p>
                                <p>Generated Using AI Tools :</p>
                            </div>
                            <ul className="list-disc ml-8 space-y-1">
                                <li>
                                    <a href="https://chatgpt.com/" className="underline">ChatGPT</a>
                                </li>
                                <li>
                                    <a href="https://leonardo.ai/" className="underline">Leonardo AI</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <span>
                            <b class="text-blue-700">[ 2 ]</b> <a href="https://pace.oceansciences.org/gallery_more.htm?id=2179" className="underline">NASA's Pace Satellite Launch</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 3 ]</b> <a href="https://pace.oceansciences.org/gallery_more.htm?id=1597" className="underline">Earth: Our Living Planet</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 4 ]</b> <a href="https://pace.oceansciences.org/gallery_more.htm?id=2145" className="underline">PACE Observatory Being Inspected at Astrotech</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 5 ]</b> <a href="https://pace.oceansciences.org/gallery_more.htm?id=1735" className="underline">PACE Satellite in Orbit</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 6 ]</b> <a href="https://pace.oceansciences.org/gallery_more.htm?id=2171" className="underline">50 Years of Harmful Algal Blooms</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 7 ]</b> <a href="https://pace.oceansciences.org/oci.htm" className="underline">Ocean Color Instrument</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 8 ]</b> <a href="https://pace.oceansciences.org/gallery_more.htm?id=2179" className="underline">OCI Image Collection</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 9 ]</b> <a href="https://pace.oceansciences.org/spexone.htm" className="underline">SPEXone Polarimeter</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 10 ]</b> <a href="https://pace.oceansciences.org/slideshow_gallery.htm?id=18" className="underline">SPEXone Image Collection</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 11 ]</b> <a href="https://pace.oceansciences.org/harp2.htm" className="underline">HARP2 Polarimeter</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 12 ]</b> <a href="https://pace.oceansciences.org/slideshow_gallery.htm?id=19" className="underline">HARP2 Image Collection</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 13 ]</b> <a href="https://science.nasa.gov/wp-content/uploads/2024/02/304765158-615003676989374-3689670236967468275-n.jpg?w=1536&format=webp" className="underline">Climate Change Image</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 14 ]</b> <a href="https://www.americanoceans.org/facts/how-deep-does-light-penetrate-the-ocean/" className="underline">Light Ocean Penetration Image</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 15 ]</b> <a href="https://pace.oceansciences.org/images/GSFC_20220805_PACE_064914_400w.jpg" className="underline">Pace OCI Instrument Image</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 16 ]</b> <a href="https://pixabay.com/photos/sandstorm-sand-dune-travel-5427661/" className="underline">Aerosols and Sandstorm Image</a>
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

Component.displayName = "ReferencesPage";
