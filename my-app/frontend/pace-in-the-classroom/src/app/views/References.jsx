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
                                    <a href="https://chatgpt.com/" className="underline" target='_blank'>ChatGPT</a>
                                </li>
                                <li>
                                    <a href="https://leonardo.ai/" className="underline" target='_blank'>Leonardo AI</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <span>
                            <b class="text-blue-700">[ 2 ]</b> <a href="https://pace.oceansciences.org/gallery_more.htm?id=2179" className="underline" target='_blank'>NASA's Pace Satellite Launch</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 3 ]</b> <a href="https://pace.oceansciences.org/gallery_more.htm?id=1597" className="underline" target='_blank'>Earth: Our Living Planet</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 4 ]</b> <a href="https://pace.oceansciences.org/gallery_more.htm?id=2145" className="underline" target='_blank'>PACE Observatory Being Inspected at Astrotech</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 5 ]</b> <a href="https://pace.oceansciences.org/gallery_more.htm?id=1735" className="underline" target='_blank'>PACE Satellite in Orbit</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 6 ]</b> <a href="https://pace.oceansciences.org/gallery_more.htm?id=2171" className="underline" target='_blank'>50 Years of Harmful Algal Blooms</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 7 ]</b> <a href="https://pace.oceansciences.org/oci.htm" className="underline" target='_blank'>Ocean Color Instrument</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 8 ]</b> <a href="https://pace.oceansciences.org/gallery_more.htm?id=2179" className="underline" target='_blank'>OCI Image Collection</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 9 ]</b> <a href="https://pace.oceansciences.org/spexone.htm" className="underline" target='_blank'>SPEXone Polarimeter</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 10 ]</b> <a href="https://pace.oceansciences.org/slideshow_gallery.htm?id=18" className="underline" target='_blank'>SPEXone Image Collection</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 11 ]</b> <a href="https://pace.oceansciences.org/harp2.htm" className="underline" target='_blank'>HARP2 Polarimeter</a>
                        </span>
                    </li>
                    <li>
                        <span>
                            <b class="text-blue-700">[ 12 ]</b> <a href="https://pace.oceansciences.org/slideshow_gallery.htm?id=19" className="underline" target='_blank'>HARP2 Image Collection</a>
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

Component.displayName = "ReferencesPage";
