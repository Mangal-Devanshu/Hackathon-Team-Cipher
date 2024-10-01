import React from 'react';

function MapControls({ dataset, setDataset, viewMode, setViewMode, isFetching, handleSubmit }) {
    const handleDatasetChange = (event) => {
        setDataset(event.target.value);
    };

    const handleModeChange = (event) => {
        setViewMode(event.target.value);
    };

    return (
        <div class="w-80 p-8 bg-gray-900 text-white rounded-md">
            <div class="max-w-md mx-auto">
                <div class="mb-6">
                    <label htmlFor="datasetSelect" class="block text-primary mb-2">
                        Select Dataset:
                    </label>
                    <select
                        id="datasetSelect"
                        value={dataset}
                        onChange={handleDatasetChange}
                        class="w-full p-2 bg-gray-700 text-white border border-blue-500 rounded focus:outline-none"
                    >
                        <option value="">Select a dataset</option>
                        <option value="chl">Chlorophyll</option>
                        <option value="carbon">Carbon</option>
                        <option value="sst">Sea Surface Temperature (SST)</option>
                    </select>
                </div>

                <div class="mb-6">
                    <label htmlFor="modeSelect" class="block text-primary mb-2">
                        Select Mode:
                    </label>
                    <select
                        id="modeSelect"
                        value={viewMode}
                        onChange={handleModeChange}
                        class="w-full p-2 bg-gray-700 text-white border border-blue-300 rounded focus:outline-none"
                    >
                        <option value="">Select a mode</option>
                        <option value="globe">3D Globe</option>
                        <option value="map">2D Map</option>
                    </select>
                </div>

                <div class="mb-6">
                    <button
                        onClick={handleSubmit}
                        disabled={!dataset || !viewMode}
                        class={`w-full mt-4 p-2 text-white bg-blue-500 rounded focus:outline-none ${!dataset || !viewMode ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MapControls;