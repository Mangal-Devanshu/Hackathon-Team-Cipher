import React from 'react';

function MapControls({ dataset, setDataset, viewMode, setViewMode, isFetching, handleSubmit }) {
    const handleDatasetChange = (event) => {
        setDataset(event.target.value);
    };

    const handleModeChange = (event) => {
        setViewMode(event.target.value);
    };

    return (
        <div className="w-96 p-5 bg-neutral-950/60 text-white rounded-xl shadow-lg shadow-blue-700 mx-auto flex flex-col items-center justify-center">
            {/* Centering the whole component */}
            <div className="mx-auto w-full">
                <h1 class="text-4xl text-blue-700 font-bold my-10">Data Visualization</h1>
                <div className="mb-6">
                    <label htmlFor="datasetSelect" className="block text-primary mb-2">
                        Select Dataset:
                    </label>
                    <select
                        id="datasetSelect"
                        value={dataset}
                        onChange={handleDatasetChange}
                        className="w-full p-2 bg-neutral-900/80 text-white border border-blue-700 rounded focus:outline-none"
                    >
                        <option value="">Select a dataset</option>
                        <option value="chl">Chlorophyll</option>
                        <option value="carbon">Carbon</option>
                        <option value="sst">Sea Surface Temperature (SST)</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="modeSelect" className="block text-primary mb-2">
                        Select Mode:
                    </label>
                    <select
                        id="modeSelect"
                        value={viewMode}
                        onChange={handleModeChange}
                        className="w-full p-2 bg-neutral-900/80 text-white border border-blue-700 rounded focus:outline-none"
                    >
                        <option value="">Select a mode</option>
                        <option value="globe">3D Globe</option>
                        <option value="graph">Graph Visuals</option>
                        {/* <option value="map">2D Map</option> */}
                    </select>
                </div>

                <div className="flex justify-center mb-6">
                    {/* Centering the button */}
                    <button
                        onClick={handleSubmit}
                        disabled={!dataset || !viewMode}
                        className={`mt-4 p-2 text-white bg-blue-700 rounded focus:outline-none ${!dataset || !viewMode ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MapControls;
