from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# MongoDB connection
uri = "mongodb://ronitrathod:Rathod%40pace01@localhost:27017/admin"
client = MongoClient(uri)
db = client['nasaDataDB']

# Collections
collections = {
    'chl': db['chlor_data'],
    'carbon': db['paceOCI_carbon_downsampled'],
    'sst': db['paceOCI_sst_downsampled']
}

# In-memory cache to avoid fetching the same data multiple times
cache = {}

# Function to fetch paginated data based on lat/lon ranges and chunk size
def get_paginated_data(start_lat, start_lon, lat_chunk_size, lon_chunk_size, dataset):
    try:
        cache_key = f"{dataset}_{start_lat}_{start_lon}_{lat_chunk_size}_{lon_chunk_size}"
        if cache_key in cache:
            return cache[cache_key]

        # Select the appropriate collection based on dataset
        collection = collections.get(dataset)
        if collection is None:
            return None

        # Fetch documents from MongoDB that match the latitude and longitude ranges
        documents = list(collection.find({
            'latitude': {'$gte': start_lat, '$lt': start_lat + lat_chunk_size},
            'longitude': {'$gte': start_lon, '$lt': start_lon + lon_chunk_size}
        }))

        # Prepare data for the response
        if not documents:
            return None

        # Extract data from the MongoDB documents
        latitudes = []
        longitudes = []
        data_values = []

        for document in documents:
            latitudes.append(document['latitude'])
            longitudes.append(document['longitude'])
            data_values.append(
                document.get('chlorophyll_a') or
                document.get('carbon_phyto') or
                document.get('sst')
            )

        data = {
            'latitudes': latitudes,
            'longitudes': longitudes,
            'data_values': data_values
        }

        # Cache the result for future requests
        cache[cache_key] = data
        return data
    except Exception as e:
        print(f"Unexpected error: {e}")
        return None

@app.route('/api/data', methods=['GET'])
def get_data():
    try:
        # Get pagination parameters from request query
        start_lat = float(request.args.get('start_lat', 0))
        start_lon = float(request.args.get('start_lon', 0))
        lat_chunk_size = float(request.args.get('lat_chunk_size', 10))
        lon_chunk_size = float(request.args.get('lon_chunk_size', 10))
        dataset = request.args.get('dataset', 'chl')  # Default to 'chl'

        # Get paginated data
        data = get_paginated_data(start_lat, start_lon, lat_chunk_size, lon_chunk_size, dataset)

        if data:
            return jsonify(data)
        else:
            return jsonify({'message': 'No data found for this range'}), 404
    except ValueError:
        return jsonify({'message': 'Invalid parameters'}), 400

if __name__ == '__main__':
    app.run(debug=True, port=8080)
