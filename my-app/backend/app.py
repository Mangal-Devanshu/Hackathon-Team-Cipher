from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# MongoDB connection
uri = "mongodb+srv://devanshu:Rathod%40pace01@cluster0.lvq61.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(uri)
db = client['earthDataDB']
collection = db['paceOCI_chlor_downsampled']  # Corrected collection reference

# Function to fetch paginated data based on lat/lon ranges and chunk size
def get_paginated_data(start_lat, start_lon, lat_chunk_size, lon_chunk_size):
    try:
        # Fetch documents from MongoDB that match the latitude and longitude ranges
        documents = collection.find({
            'latitude': {'$gte': start_lat, '$lt': start_lat + lat_chunk_size},
            'longitude': {'$gte': start_lon, '$lt': start_lon + lon_chunk_size}
        })

        # Prepare data for the response
        if not documents:
            return None

        # Extract data from the MongoDB documents
        latitudes = []
        longitudes = []
        chlorophyll_data = []

        for document in documents:
            latitudes.append(document['latitude'])
            longitudes.append(document['longitude'])
            chlorophyll_data.append(document['chlorophyll_a'])

        data = {
            'latitudes': latitudes,
            'longitudes': longitudes,
            'chlorophyll_data': chlorophyll_data
        }

        return data
    except Exception as e:
        print(f"Unexpected error: {e}")
        return None

@app.route('/api/data', methods=['GET'])
def get_data():
    try:
        # Get pagination parameters from request query
        start_lat = float(request.args.get('start_lat', 0))  # Default to 0 if not provided
        start_lon = float(request.args.get('start_lon', 0))  # Default to 0 if not provided
        lat_chunk_size = float(request.args.get('lat_chunk_size', 10))  # Default to 10-degree chunks
        lon_chunk_size = float(request.args.get('lon_chunk_size', 10))  # Default to 10-degree chunks

        data = get_paginated_data(start_lat, start_lon, lat_chunk_size, lon_chunk_size)

        if data:
            return jsonify(data)
        else:
            return jsonify({'message': 'No data found for this range'}), 404
    except ValueError:
        return jsonify({'message': 'Invalid parameters'}), 400

if __name__ == '__main__':
    app.run(debug=True, port=8080)